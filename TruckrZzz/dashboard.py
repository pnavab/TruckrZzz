"""The dashboard page."""
from TruckrZzz import styles
from TruckrZzz.components.navbar import navbar, NavbarState
from TruckrZzz.graphs import GraphState
from sqlmodel import Field, SQLModel, select, JSON
from sqlalchemy import Column
import reflex as rx

class Trucker(rx.Model, table=True): # run reflex db init
    id: int = Field(default=None, primary_key=True)
    name: str
    device_id: str
    graph_data: list = Field(sa_column=Column(JSON))
Trucker.create_all()
with rx.session() as session:
    session.add(Trucker(name="joe", device_id="123123cf", data=[
        {"name": "Start", "awake": 9, "sleepy": None},
        {"name": "Start", "awake": 6, "sleepy": 6},
        {"name": "Start", "awake": 5, "sleepy": None},
    ]))
    session.commit()
with rx.session() as session:
    session.add(Trucker(name="bob", device_id="dsf98723", data=[
        {"name": "Start", "awake": 7, "sleepy": None},
        {"name": "Start", "awake": 9, "sleepy": 9},
        {"name": "Start", "awake": 8, "sleepy": None},
    ]))
    session.commit()

class DashboardState(rx.State):

    truckers_data: list[dict] = []

    search_query: str = ""

    def update_truckers_data(self, new_data: list[dict]):
        self.truckers_data = new_data

    # Fetch a trucker's name by id
    def get_name_by_id(self, trucker_id: int) -> str:
        with rx.session() as session:
            trucker = session.exec(select(Trucker).where(Trucker.id == trucker_id)).first()
            return trucker.name if trucker else "Trucker not found"
        
    # Fetch a trucker's graph by id
    def get_graph_data_by_id(self, trucker_id: int) -> str:
        with rx.session() as session:
            trucker = session.exec(select(Trucker).where(Trucker.id == trucker_id)).first()
            return trucker.graph_data if trucker else "Trucker not found"
        
    def get_last_sleepiness_value_by_id(self, trucker_id):
        with rx.session() as session:
            trucker = session.exec(select(Trucker).where(Trucker.id == trucker_id)).first()
            last_val = trucker.graph_data[-1]
            if last_val["sleepy"] is not None and last_val["sleepy"] < GraphState.sleepiness_value:
                last_val = last_val["sleepy"]
            else:
                last_val = last_val["awake"]
            return last_val
        
    async def update_last_sleepiness_value(self, id):
        self.last_val = await self.get_last_sleepiness_value_by_id(id)
        yield
        
    # Delete a trucker by id
    def delete_trucker_by_id(self, id):
        with rx.session() as session:
            trucker = session.exec(select(Trucker).where(Trucker.id == id)).first()
            if trucker:
                session.delete(trucker)
                session.commit()
                updated_data = [trucker for trucker in self.truckers_data if trucker['id'] != id]
                self.update_truckers_data(updated_data)
    
    # Add a trucker
    def add_trucker(self, name, device_id):
        with rx.session() as session:
            new_trucker = Trucker(name=name, device_id=device_id)
            session.add(new_trucker)
            session.commit()
            new_data = {"id": new_trucker.id, "name": new_trucker.name, "device_id": new_trucker.device_id}
            updated_data = self.truckers_data + [new_data]
            self.update_truckers_data(updated_data)
            # self.get_truckers_list() # not live updating
        
    # Get all truckers from database
    def get_truckers_list(self):
        with rx.session() as session:
            truckers = session.exec(select(Trucker)).all()
            # Convert result to JSON serializable format (list of dicts)
            truckers_data = [{'id': trucker.id, 'name': trucker.name, 'device_id': trucker.device_id} for trucker in truckers]
            # Log the data to the console
            self.update_truckers_data(truckers_data)
            session.commit()
            return rx.console_log(truckers_data)

    filtered_truckers_data: list[dict]
    def update_filtered_data(self, new_data: list[dict]):
        self.filtered_truckers_data = new_data

    def submit_search(self):
        if self.search_query == "":
            self.update_filtered_data([])
        else:
            updated_data = [
                trucker for trucker in self.truckers_data
                if self.search_query.lower() in trucker['name'].lower()
                or self.search_query.lower() in trucker['device_id'].lower()
            ]
            self.update_filtered_data(updated_data)

    # def reset_state(self): # can delete i think
    #     self.reset()

#substates
# trucker_states = {trucker['id']: DashboardState() for trucker in DashboardState.truckers_data}

# Now for each trucker, you can manage their 'last_val' individually
# for trucker_id, state in trucker_states.items():
#     # Call the event handler to update 'last_val' for each trucker
#     state.update_last_sleepiness_value(trucker_id)

def display_trucker(trucker: dict):
    path = f"/graphs/{trucker['device_id']}"
    # last_val = trucker['graph_data'][-1]["awake"]
    last_val = 8
    return rx.hstack(
        rx.box(
            rx.cond(
                last_val,
                rx.text(f"ID: {trucker['id']}, Name: {trucker['name']}, Device ID: {trucker['device_id']}, Last Sleepiness Value: {last_val}"),
                rx.text("Loading data...")
            ),
            padding="1em",
            border="1px solid #DDD",
            border_radius="10px",
            shadow="0 2px 4px rgba(0,0,0,0.1)",
            width="100%",
            background_color="#93d3d9",
            margin_y="0.5em",
            display="inline-block",
            transition="transform 0.15s ease-in-out",
            _hover={"background_color": "#b69bcc", "transform": "scale(1.1)"},
            # on_click=rx.redirect(path), # Error: x Expected unicode escape i have to go to .web/pages/dashboard and remove the unicode escapes
        ),
        rx.button(
            rx.icon(tag="delete"),
            on_click=DashboardState.delete_trucker_by_id(trucker['id'])
        )
    )

def search_bar():
    return rx.hstack(
        rx.input(
            placeholder="Search for truckers",
            on_change=DashboardState.set_search_query,
            width="100%",
            border_radius="15px"
        ),
        rx.button(
            rx.icon(tag="search"),
            on_click=DashboardState.submit_search
        )
    )

@rx.page(route="/dashboard", title="dashboard", on_load=DashboardState.get_truckers_list)
def dashboard() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.heading("Dashboard"),
        submit_popover(),
        search_bar(),
        rx.cond(
            DashboardState.truckers_data.length() < 1,
            rx.text("Fetching users...")
        ),
        rx.cond(
            DashboardState.filtered_truckers_data.length() > 0, #adding a second conditional appended escape unicode characters
            rx.vstack(
                rx.foreach(
                    DashboardState.filtered_truckers_data, display_trucker
                )
            ),
            rx.vstack(
                rx.foreach(
                    DashboardState.truckers_data, display_trucker
                )
            ),
        ),
        align_items="center",
        width="60%"
    )

class PopoverState(rx.State):
    name: str = ''
    device_id: str = ''


def submit_popover():
    return rx.popover.root(
        rx.popover.trigger(rx.button("Add Trucker")),
        rx.popover.content(
            rx.form(
                rx.vstack(
                    rx.input(placeholder="Name", name="name", on_change=PopoverState.set_name),
                    rx.input(placeholder="Device ID", name="device_id", on_change=PopoverState.set_device_id),
                    rx.popover.close(
                        rx.button("Submit", type="submit")
                    ),
                ),
                on_submit=DashboardState.add_trucker(PopoverState.name, PopoverState.device_id)
            )
        ),
        position="fixed",
        bottom="0px",
        left="0px",
        z_index="10" 
    )


# # a nother attempt with sub states
# def render_trucker(trucker, trucker_state: TruckerState):
#     return rx.hstack(
#         rx.box(
#             rx.cond(
#                 trucker_state.last_val,
#                 rx.text(f"ID: {trucker['id']}, Name: {trucker['name']}, Device ID: {trucker['device_id']}, Last Sleepiness Value: {trucker_state.last_val}"),
#                 rx.text("Loading data...")
#             )
#         )
#     )

# # Assuming `truckers_list` is a list of trucker dictionaries and `trucker_states` is a dictionary mapping trucker ids to their respective substates
# def render_truckers(truckers_list, trucker_states):
#     return rx.foreach(truckers_list, lambda trucker: render_trucker(trucker, trucker_states[trucker['id']]))
    