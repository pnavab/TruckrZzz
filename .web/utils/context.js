import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.graph_state": {"data": [{"name": "Start", "awake": 9, "sleepy": null}, {"name": "Start", "awake": 6, "sleepy": 6}, {"name": "Start", "awake": 5, "sleepy": null}], "graph_data": [{"name": "start", "value": 9}], "last_value": 9, "running": false, "sleepiness_value": 4}, "state.webcam_state": {"processed_frame": ""}, "state.navbar_state": {}, "state.popover_state": {"device_id": "", "name": ""}, "state.dashboard_state": {"filtered_truckers_data": [], "search_query": "", "truckers_data": []}, "state.state": {}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__graph_state: createContext(null),
  state__webcam_state: createContext(null),
  state__navbar_state: createContext(null),
  state__popover_state: createContext(null),
  state__dashboard_state: createContext(null),
  state__state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__graph_state, dispatch_state__graph_state] = useReducer(applyDelta, initialState["state.graph_state"])
  const [state__webcam_state, dispatch_state__webcam_state] = useReducer(applyDelta, initialState["state.webcam_state"])
  const [state__navbar_state, dispatch_state__navbar_state] = useReducer(applyDelta, initialState["state.navbar_state"])
  const [state__popover_state, dispatch_state__popover_state] = useReducer(applyDelta, initialState["state.popover_state"])
  const [state__dashboard_state, dispatch_state__dashboard_state] = useReducer(applyDelta, initialState["state.dashboard_state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.graph_state": dispatch_state__graph_state,
      "state.webcam_state": dispatch_state__webcam_state,
      "state.navbar_state": dispatch_state__navbar_state,
      "state.popover_state": dispatch_state__popover_state,
      "state.dashboard_state": dispatch_state__dashboard_state,
      "state.state": dispatch_state__state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__graph_state.Provider value={ state__graph_state }>
    <StateContexts.state__webcam_state.Provider value={ state__webcam_state }>
    <StateContexts.state__navbar_state.Provider value={ state__navbar_state }>
    <StateContexts.state__popover_state.Provider value={ state__popover_state }>
    <StateContexts.state__dashboard_state.Provider value={ state__dashboard_state }>
    <StateContexts.state__state.Provider value={ state__state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state__dashboard_state.Provider>
    </StateContexts.state__popover_state.Provider>
    </StateContexts.state__navbar_state.Provider>
    </StateContexts.state__webcam_state.Provider>
    </StateContexts.state__graph_state.Provider>
    </StateContexts.state.Provider>
  )
}