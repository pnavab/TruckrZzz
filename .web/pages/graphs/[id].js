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

const RechartsBarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });
const RechartsLineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });


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

export function Button_a695194693785e30b0c4f941e9a86e95 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_7e7fff77226b6a18488c90e7047c1922 = useCallback((_e) => addEvents([Event("state.graph_state.toggle_streaming", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton color={`blue`} onClick={on_click_7e7fff77226b6a18488c90e7047c1922}>
  {`Toggle Streaming`}
</RadixThemesButton>
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

export function Nextlink_eada45837dd5269791f8cd2d6c85f84e () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#ADD8E6` : `transparent`, "textDecor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"transform": "scale(1.1)", "textDecor": "underline"}}} href={`/dashboard`} passHref={true}>
  {`Dashboard`}
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

export function Button_9597603d890ab5f8238396802458a589 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_7cb754e9fe2cc1791459bafa2f353962 = useCallback((_e) => addEvents([Event("_download", {url:`/reflex_logo.png`,filename:`different_name_logo.png`})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_7cb754e9fe2cc1791459bafa2f353962}>
  {`Download Graph`}
</RadixThemesButton>
  )
}

export function Nextlink_b0ee6904d0980f25e02c4adbcbfdba05 () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `#ADD8E6` : `transparent`, "textDecor": isTrue(((state__navbar_state.selected_tab) === ("graphs"))) ? `underline` : `none`, "&:hover": {"transform": "scale(1.1)", "textDecor": "underline"}}} href={`/graphs/6`} passHref={true}>
  {`Graph`}
</NextLink>
  )
}

export function Nextlink_c25d099bee075c5dafd83024f1c90dc6 () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#ADD8E6` : `transparent`, "textDecor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"transform": "scale(1.1)", "textDecor": "underline"}}} href={`/`} passHref={true}>
  {`Home`}
</NextLink>
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

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "flexDirection": "column"}} gap={`2`}>
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
  <Nextlink_c25d099bee075c5dafd83024f1c90dc6/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_eada45837dd5269791f8cd2d6c85f84e/>
</RadixThemesLink>
  <RadixThemesFlex css={{"width": "20px", "flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <Nextlink_b0ee6904d0980f25e02c4adbcbfdba05/>
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
