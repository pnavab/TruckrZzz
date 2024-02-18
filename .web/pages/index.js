/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, ScrollArea as RadixThemesScrollArea, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import NextHead from "next/head"



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

export function Nextlink_c25d099bee075c5dafd83024f1c90dc6 () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#ADD8E6` : `transparent`, "textDecor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"transform": "scale(1.1)", "textDecor": "underline"}}} href={`/`} passHref={true}>
  {`Home`}
</NextLink>
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

export function Nextlink_eada45837dd5269791f8cd2d6c85f84e () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#ADD8E6` : `transparent`, "textDecor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"transform": "scale(1.1)", "textDecor": "underline"}}} href={`/dashboard`} passHref={true}>
  {`Dashboard`}
</NextLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100vh", "alignItems": "center", "flexDirection": "column"}} gap={`2`}>
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
  <RadixThemesFlex align={`center`} css={{"width": "80%", "fontSize": "2em", "marginTop": "20px", "flexDirection": "column"}} gap={`7`}>
  <RadixThemesBox css={{"padding": "5px", "marginTop": "5px"}}>
  <RadixThemesHeading>
  {`Saving Lives One Heartbeat at a Time`}
</RadixThemesHeading>
</RadixThemesBox>
  <RadixThemesBox css={{"borderRadius": "15px", "width": "fill", "height": "fill"}}>
  <img src={`/BigTruck.png`}/>
</RadixThemesBox>
  <RadixThemesScrollArea css={{"height": "70vh", "backgroundColor": "#f2f2f2", "borderRadius": "15px", "marginBottom": "9%"}} scrollbars={`horizontal`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesBox css={{"background": "white", "width": "8em", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px"}}>
  <RadixThemesBox css={{"width": "8em", "height": "25%"}}>
  <img css={{"width": "100%", "height": "100%"}} src={`/webcam.png`}/>
</RadixThemesBox>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px"}} size={`5`}>
  {`Webcam Integration`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "5px", "marginRight": "5px"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`2`}>
  {`Our project incorporates facial recognition technology leveraging the webcam to monitor the sleepiness level of truck drivers in real time. By analyzing facial cues and patterns, the system assesses signs of drowsiness, alerting the driver and playing a warning sound to wake the driver up. This innovative feature not only prioritizes the well-being of drivers but also enhances overall fleet management efficiency.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"background": "white", "width": "8em", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px"}}>
  <RadixThemesBox css={{"width": "8em", "height": "25%"}}>
  <img css={{"width": "100%", "height": "100%"}} src={`/webcam.png`}/>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px"}} size={`5`}>
  {`Livestream Heartrate`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "5px", "marginRight": "5px"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`2`}>
  {`Our project integrates a real-time heart rate monitor to continuously track the heart rate of truck drivers during their journeys. By leveraging this data, our system provides insight into the driver's stress levels and  fatigue. With our advanced heart rate monitoring feature, we prioritize the health and performance of truck drivers, contributing to enhanced fleet management and overall operational excellence.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"background": "white", "width": "8em", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px"}}>
  <RadixThemesBox css={{"width": "8em", "height": "25%"}}>
  <img css={{"width": "100%", "height": "100%"}} src={`/webcam.png`}/>
</RadixThemesBox>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px"}} size={`5`}>
  {`Additional Feature`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "5px", "marginRight": "5px"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`2`}>
  {`This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"background": "white", "width": "8em", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px"}}>
  <RadixThemesBox css={{"width": "8em", "height": "25%"}}>
  <img css={{"width": "100%", "height": "100%"}} src={`/webcam.png`}/>
</RadixThemesBox>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px"}} size={`5`}>
  {`Additional Feature`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "5px", "marginRight": "5px"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`2`}>
  {`This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesScrollArea>
</RadixThemesFlex>
  <RadixThemesBox css={{"alignItems": "center", "padding": "1em", "backgroundColor": "White", "width": "100%", "bottom": "0"}}>
  <RadixThemesFlex css={{"marginRight": "15px", "marginLeft": "15px", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"color": "rgb(107,99,246)"}} href={`/`} passHref={true}>
  {`Home`}
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"color": "rgb(107,99,246)"}} href={`/dashboard`} passHref={true}>
  {`Dashboard`}
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"color": "rgb(107,99,246)"}} href={`/graphs/6`} passHref={true}>
  {`Graphs`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
