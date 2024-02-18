/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Bar as RechartsBar, Brush as RechartsBrush, Legend as RechartsLegend, Line as RechartsLine, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const RechartsLineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });
const RechartsBarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });


export function Button_9597603d890ab5f8238396802458a589 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_7cb754e9fe2cc1791459bafa2f353962 = useCallback((_e) => addEvents([Event("_download", {url:`/reflex_logo.png`,filename:`different_name_logo.png`})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_7cb754e9fe2cc1791459bafa2f353962}>
  {`Download Graph`}
</RadixThemesButton>
  )
}

export function Fragment_037fffe1114b22fe280102dd33270023 () {
  const state__graph_state = useContext(StateContexts.state__graph_state)


  return (
    <Fragment>
  {isTrue(state__graph_state.user_id) ? (
  <Fragment>
  <RadixThemesHeading>
  {`Showing graph for user ${state__graph_state.user_id}`}
</RadixThemesHeading>
</Fragment>
) : (
  <Fragment>
  <RadixThemesHeading>
  {`Loading user id...`}
</RadixThemesHeading>
</Fragment>
)}
</Fragment>
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

export function Responsivecontainer_9ab6f46295c1efadef663d4d94249fce () {
  const state__graph_state = useContext(StateContexts.state__graph_state)


  return (
    <RechartsResponsiveContainer height={400} width={600}>
  <RechartsBarChart data={state__graph_state.data} height={`100%`} width={`100%`}>
  <RechartsBar dataKey={`sleepy`} fill={`#FF0000`} stroke={`#FF0000`}/>
  <RechartsBar dataKey={`awake`} fill={`#8884d8`} stroke={`#8884d8`}/>
  <RechartsBrush dataKey={`name`} height={30} stroke={`#8884d8`}/>
  <RechartsXAxis dataKey={`name`}/>
  <RechartsYAxis/>
</RechartsBarChart>
</RechartsResponsiveContainer>
  )
}

export function Nextlink_04e84d65253ae2f5e88f7285b980b20d () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "color": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#ffffff` : `black`, "backgroundColor": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#3e5c76` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === (""))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/`} passHref={true}>
  {`Home`}
</NextLink>
  )
}

export function Nextlink_7b60baf52fd3d49dbf1f60abe53e5691 () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "color": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `#ffffff` : `black`, "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `#3e5c76` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/graphs/6`} passHref={true}>
  {`Graph`}
</NextLink>
  )
}

export function Responsivecontainer_9e2c814f5ba25cc7e0d1a2aae211b33a () {
  const state__graph_state = useContext(StateContexts.state__graph_state)


  return (
    <RechartsResponsiveContainer height={400} width={600}>
  <RechartsLineChart data={state__graph_state.data} height={`100%`} width={`100%`}>
  <RechartsLine dataKey={`sleepy`} stroke={`#FF0000`} type={`monotone`}/>
  <RechartsLine dataKey={`awake`} stroke={`#8884d8`} type={`monotone`}/>
  <RechartsXAxis dataKey={`name`}/>
  <RechartsYAxis/>
  <RechartsTooltip/>
  <RechartsLegend/>
</RechartsLineChart>
</RechartsResponsiveContainer>
  )
}

export function Nextlink_e63d737be7802d6043c88ba5b017461d () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "color": isTrue(((state__navbar_state.selected_tab) === ("webcam"))) ? `#ffffff` : `black`, "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("webcam"))) ? `#3e5c76` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("webcam"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/webcam`} passHref={true}>
  {`Webcam`}
</NextLink>
  )
}

export function Nextlink_3667c1e2fcc00ab30d42e8b29b5b05be () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "color": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#ffffff` : `black`, "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#3e5c76` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/dashboard`} passHref={true}>
  {`Dashboard`}
</NextLink>
  )
}

export function Button_a695194693785e30b0c4f941e9a86e95 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_7e7fff77226b6a18488c90e7047c1922 = useCallback((_e) => addEvents([Event("state.graph_state.toggle_streaming", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton color={`blue`} onClick={on_click_7e7fff77226b6a18488c90e7047c1922}>
  {`Toggle Streaming`}
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "padding": "1em", "backgroundColor": "#f0ebd8", "height": "15%", "borderRadius": "0 0 10px 10px", "borderBottom": "1px solid #F4F3F6", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"transition": "transform 0.2s ease-in-out", "&:hover": {"textDecor": "none", "transform": "scale(1.1)"}}} href={`/`} passHref={true}>
  <RadixThemesHeading css={{"color": "#1d2d44"}} size={`9`}>
  {`TruckrZzz`}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}} gap={`4`}>
  <RadixThemesLink asChild={true}>
  <Nextlink_04e84d65253ae2f5e88f7285b980b20d/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_3667c1e2fcc00ab30d42e8b29b5b05be/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_7b60baf52fd3d49dbf1f60abe53e5691/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_e63d737be7802d6043c88ba5b017461d/>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"&:hover": {"background": "#F5EFFE"}, "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "background": "transparent", "borderRadius": "0.375rem"}} href={`https://github.com/reflex-dev/reflex`} passHref={true}>
  <img css={{"height": "3em", "padding": "0.5em"}} src={`/github.svg`}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <Fragment_037fffe1114b22fe280102dd33270023/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <Button_a695194693785e30b0c4f941e9a86e95/>
  <Responsivecontainer_9e2c814f5ba25cc7e0d1a2aae211b33a/>
  <Responsivecontainer_9ab6f46295c1efadef663d4d94249fce/>
</RadixThemesFlex>
  <Button_9597603d890ab5f8238396802458a589/>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`user graphs`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
