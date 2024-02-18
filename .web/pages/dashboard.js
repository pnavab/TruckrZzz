/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Popover as RadixThemesPopover, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { DeleteIcon as LucideDeleteIcon, SearchIcon as LucideSearchIcon } from "lucide-react"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Nextlink_4be1a1e6cdb3540cbde359ae92cd9d6a () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#ADD8E6` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === (""))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/`} passHref={true}>
  {`Home`}
</NextLink>
  )
}

export function Textfield__input_a4ad24278cbaaa7d9f457ae5ff2f3928 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_ed82dc0e09406bf103315dbc0208cd7b = useCallback((_e0) => addEvents([Event("state.popover_state.set_device_id", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesTextField.Input name={`device_id`} onChange={on_change_ed82dc0e09406bf103315dbc0208cd7b} placeholder={`Device ID`}/>
  )
}

export function Textfield__input_e791d397d9ca3a824e9795a2a6985cae () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_2cb8445ebf7e3d2aee28071d87eef3e0 = useCallback((_e0) => addEvents([Event("state.popover_state.set_name", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesTextField.Input name={`name`} onChange={on_change_2cb8445ebf7e3d2aee28071d87eef3e0} placeholder={`Name`}/>
  )
}

export function Textfield__input_c6435dbbe72415c72b3e380d81ff1569 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_572fb2e0cad214cc8586dc27d01cea55 = useCallback((_e0) => addEvents([Event("state.dashboard_state.set_search_query", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesTextField.Input css={{"width": "100%", "borderRadius": "15px"}} onChange={on_change_572fb2e0cad214cc8586dc27d01cea55} placeholder={`Search for truckers`}/>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Nextlink_ccc8bf5a01f6a9ecc8245e9a6987b9f4 () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("webcam"))) ? `#ADD8E6` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("webcam"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/webcam`} passHref={true}>
  {`Webcam`}
</NextLink>
  )
}

export function Nextlink_b1c6512ef7400da9cc7e870a3c2628fa () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#ADD8E6` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/dashboard`} passHref={true}>
  {`Dashboard`}
</NextLink>
  )
}

export function Fragment_e49a0b0998fac00c2371b2d458f5f1eb () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__dashboard_state = useContext(StateContexts.state__dashboard_state)


  return (
    <Fragment>
  {isTrue(((state__dashboard_state.filtered_truckers_data.length) > (0))) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  {state__dashboard_state.filtered_truckers_data.map((trucker, index_03552c7edc10444120adf4543a059404) => (
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} key={index_03552c7edc10444120adf4543a059404} gap={`2`}>
  <RadixThemesLink asChild={true}>
  <NextLink href={`/graphs/${trucker.device_id}`} passHref={true}>
  <RadixThemesBox css={{"padding": "1em", "border": "1px solid #DDD", "borderRadius": "10px", "shadow": "0 2px 4px rgba(0,0,0,0.1)", "width": "100%", "backgroundColor": "#93d3d9", "marginTop": "0.5em", "marginBottom": "0.5em", "display": "inline-block", "transition": "transform 0.15s ease-in-out", "&:hover": {"backgroundColor": "#b69bcc", "transform": "scale(1.1)"}}}>
  <Fragment>
  {isTrue(isTrue(trucker.graph_data) ? trucker.graph_data.at(-1)["awake"] : 5) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`ID: ${trucker.id}, Name: ${trucker.name}, Device ID: ${trucker.device_id}, Last Sleepiness Value: ${isTrue(trucker.graph_data) ? trucker.graph_data.at(-1)["awake"] : 5}`}
</RadixThemesText>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Loading data...`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  <RadixThemesButton onClick={(_e) => addEvents([Event("state.dashboard_state.delete_trucker_by_id", {id:trucker.id})], (_e), {})}>
  <LucideDeleteIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
</RadixThemesFlex>
))}
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  {state__dashboard_state.truckers_data.map((trucker, index_03552c7edc10444120adf4543a059404) => (
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} key={index_03552c7edc10444120adf4543a059404} gap={`2`}>
  <RadixThemesLink asChild={true}>
  <NextLink href={`/graphs/${trucker.device_id}`} passHref={true}>
  <RadixThemesBox css={{"padding": "1em", "border": "1px solid #DDD", "borderRadius": "10px", "shadow": "0 2px 4px rgba(0,0,0,0.1)", "width": "100%", "backgroundColor": "#93d3d9", "marginTop": "0.5em", "marginBottom": "0.5em", "display": "inline-block", "transition": "transform 0.15s ease-in-out", "&:hover": {"backgroundColor": "#b69bcc", "transform": "scale(1.1)"}}}>
  <Fragment>
  {isTrue(isTrue(trucker.graph_data) ? trucker.graph_data.at(-1)["awake"] : 5) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`ID: ${trucker.id}, Name: ${trucker.name}, Device ID: ${trucker.device_id}, Last Sleepiness Value: ${isTrue(trucker.graph_data) ? trucker.graph_data.at(-1)["awake"] : 5}`}
</RadixThemesText>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Loading data...`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  <RadixThemesButton onClick={(_e) => addEvents([Event("state.dashboard_state.delete_trucker_by_id", {id:trucker.id})], (_e), {})}>
  <LucideDeleteIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
</RadixThemesFlex>
))}
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

export function Button_72ce6a135682ba23b0237edfc05ed74b () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_4ad30daad5f1a765af6da844ea466057 = useCallback((_e) => addEvents([Event("state.dashboard_state.submit_search", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_4ad30daad5f1a765af6da844ea466057}>
  <LucideSearchIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesButton>
  )
}

export function Root_73107f8974a03c21e2eae3fe979701e6 () {
  const state__popover_state = useContext(StateContexts.state__popover_state)
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_559be44f8ef55201ba35f5e2471064bc = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.dashboard_state.add_trucker", {name:state__popover_state.name,device_id:state__popover_state.device_id})])

        if (false) {
            $form.reset()
        }
    })
    


  return (
    <RadixFormRoot className={`Root`} onSubmit={handleSubmit_559be44f8ef55201ba35f5e2471064bc}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <Textfield__input_e791d397d9ca3a824e9795a2a6985cae/>
  <Textfield__input_a4ad24278cbaaa7d9f457ae5ff2f3928/>
  <RadixThemesPopover.Close>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesPopover.Close>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Fragment_55c98eef18d01d4fb1795dee98278242 () {
  const state__dashboard_state = useContext(StateContexts.state__dashboard_state)


  return (
    <Fragment>
  {isTrue(((state__dashboard_state.truckers_data.length) < (1))) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Fetching users...`}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Nextlink_ff641f88a18a9b37087217e798b1da66 () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `#ADD8E6` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/graphs/6`} passHref={true}>
  {`Graph`}
</NextLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "60%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "padding": "1em", "borderBottom": "1px solid #F4F3F6", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"&:hover": {"transition": "transform 0.2s ease-in-out", "textDecor": "none", "transform": "scale(1.1)"}}} href={`/`} passHref={true}>
  <RadixThemesHeading size={`7`}>
  {`TruckrZzz`}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}} gap={`4`}>
  <RadixThemesLink asChild={true}>
  <Nextlink_4be1a1e6cdb3540cbde359ae92cd9d6a/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_b1c6512ef7400da9cc7e870a3c2628fa/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_ff641f88a18a9b37087217e798b1da66/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_ccc8bf5a01f6a9ecc8245e9a6987b9f4/>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"&:hover": {"background": "#F5EFFE"}, "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "background": "transparent", "borderRadius": "0.375rem"}} href={`https://github.com/reflex-dev/reflex`} passHref={true}>
  <img css={{"height": "3em", "padding": "0.5em"}} src={`/github.svg`}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesHeading>
  {`Dashboard`}
</RadixThemesHeading>
  <RadixThemesPopover.Root css={{"position": "fixed", "bottom": "0px", "left": "0px", "zIndex": "10"}}>
  <RadixThemesPopover.Trigger>
  <RadixThemesButton>
  {`Add Trucker`}
</RadixThemesButton>
</RadixThemesPopover.Trigger>
  <RadixThemesPopover.Content>
  <Root_73107f8974a03c21e2eae3fe979701e6/>
</RadixThemesPopover.Content>
</RadixThemesPopover.Root>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <Textfield__input_c6435dbbe72415c72b3e380d81ff1569/>
  <Button_72ce6a135682ba23b0237edfc05ed74b/>
</RadixThemesFlex>
  <Fragment_55c98eef18d01d4fb1795dee98278242/>
  <Fragment_e49a0b0998fac00c2371b2d458f5f1eb/>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`dashboard`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
