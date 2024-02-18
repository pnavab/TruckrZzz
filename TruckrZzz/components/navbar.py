"""Sidebar component for the app."""

from TruckrZzz import styles

import reflex as rx

class NavbarState(rx.State):

    @rx.var
    def selected_tab(self):
        return self.router.page.path.split('/')[1]
    
class Navbar(rx.Component):
    def is_selected(self, tab_name: str) -> bool:
        # Helper function to determine if the tab is selected
        return NavbarState.selected_tab == tab_name
    
    def render(self):
        return rx.hstack(
            # The logo with larger text on the left.
            rx.link(
                rx.heading("TruckrZzz", size="9", color="#1d2d44"),
                href="/",
                transition="transform 0.2s ease-in-out",
                _hover={
                    "text_decor": "none",
                    "transform": "scale(1.1)",
                }
            ),
            rx.spacer(),
            # Centered text links "home", "dash", "graph".
            rx.center(
                rx.link("Home", href="/", padding="1em", border_radius="0.5em", color=rx.cond(self.is_selected(""), "#ffffff", "black"), background_color=rx.cond(self.is_selected(""), "#3e5c76", "transparent"), text_decoration=rx.cond(self.is_selected(""), "underline", "none"), _hover={"text_decoration": "underline"}),
                rx.spacer(width="20px"),
                rx.link("Dashboard", href="/dashboard", padding="1em", border_radius="0.5em", color=rx.cond(self.is_selected("dashboard"), "#ffffff", "black"), background_color=rx.cond(self.is_selected("dashboard"), "#3e5c76", "transparent"), text_decoration=rx.cond(self.is_selected("dashboard"), "underline", "none"), _hover={"text_decoration": "underline"}),
                rx.spacer(width="20px"),
                rx.link("Graph", href="/graphs/6", padding="1em", border_radius="0.5em", color=rx.cond(self.is_selected("graphs"), "#ffffff", "black"), background_color=rx.cond(self.is_selected("graphs"), "#3e5c76", "transparent"), text_decoration=rx.cond(self.is_selected("graphs"), "underline", "none"), _hover={"text_decoration": "underline"}),
                rx.spacer(width="20px"),
                rx.link("Webcam", href="/webcam", padding="1em", border_radius="0.5em", color=rx.cond(self.is_selected("webcam"), "#ffffff", "black"), background_color=rx.cond(self.is_selected("webcam"), "#3e5c76", "transparent"), text_decoration=rx.cond(self.is_selected("webcam"), "underline", "none"), _hover={"text_decoration": "underline"}),
                spacing="4"
            ),
            rx.spacer(),
            # Github logo aligned to the right. We can replace this with something else later.
            rx.link(
                rx.image(
                    src="/github.svg",
                    height="3em",
                    padding="0.5em"
                ),
                href="https://github.com/reflex-dev/reflex",
                _hover={
                    "bg": styles.accent_color,
                },
                box_shadow=styles.box_shadow,
                bg="transparent",
                border_radius=styles.border_radius
            ),
            width="100%",
            padding="1em",
            background_color="#f0ebd8",
            height="15%",
            border_radius="0 0 10px 10px",
            border_bottom=styles.border,
        )

def navbar() -> rx.Component:
    return Navbar().render()
