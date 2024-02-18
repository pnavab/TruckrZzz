/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, ScrollArea as RadixThemesScrollArea, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import dynamic from "next/dynamic"
import NextLink from "next/link"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


export function Nextlink_04e84d65253ae2f5e88f7285b980b20d () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "color": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#ffffff` : `black`, "backgroundColor": isTrue(((state__navbar_state.selected_tab) === (""))) ? `#3e5c76` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === (""))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/`} passHref={true}>
  {`Home`}
</NextLink>
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

export function Nextlink_3667c1e2fcc00ab30d42e8b29b5b05be () {
  const state__navbar_state = useContext(StateContexts.state__navbar_state)


  return (
    <NextLink css={{"padding": "1em", "borderRadius": "0.5em", "color": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#ffffff` : `black`, "backgroundColor": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `#3e5c76` : `transparent`, "textDecoration": isTrue(((state__navbar_state.selected_tab) === ("dashboard"))) ? `underline` : `none`, "&:hover": {"textDecoration": "underline"}}} href={`/dashboard`} passHref={true}>
  {`Dashboard`}
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

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100vh", "alignItems": "center", "flexDirection": "column"}} gap={`2`}>
  <ReactPlayer controls={true} playing={true} url={`/truck-honk.mp3`}/>
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
  <RadixThemesFlex align={`center`} css={{"width": "80%", "fontSize": "2em", "marginTop": "20px", "flexDirection": "column"}} gap={`7`}>
  <RadixThemesBox css={{"padding": "5px", "marginTop": "5px"}}>
  <RadixThemesHeading css={{"fontSize": "1.5em", "textAlign": "center", "color": "#1d2d44"}}>
  <RadixThemesText as={`p`} css={{"marginBottom": "20px"}}>
  {`Saving Lives One `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "red", "marginBottom": "20px", "fontSize": "1.2em"}}>
  {`ـﮩ٨ـHEARTBEATـﮩ٨ـ`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`at a Time`}
</RadixThemesText>
</RadixThemesHeading>
</RadixThemesBox>
  <RadixThemesBox css={{"borderRadius": "15px"}}>
  <img css={{"width": "100vw", "height": "40vh"}} src={`/truck2.gif`}/>
</RadixThemesBox>
  <RadixThemesScrollArea css={{"height": "70vh", "backgroundColor": "#f2f2f2", "borderRadius": "15px", "marginBottom": "9%"}} scrollbars={`horizontal`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"background": "white", "alignItems": "center", "width": "27vw", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px", "borderRadius": "8px", "overflowX": "wrap", "overflowY": "scroll", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesBox css={{"width": "100%", "height": "35%"}}>
  <img css={{"width": "100%", "height": "100%", "fit": "cover"}} src={`/webcam.png`}/>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px", "marginTop": "15px"}} size={`6`}>
  {`Webcam Integration`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "10px", "marginRight": "10px", "size": "8"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`3`}>
  {`Our project incorporates facial recognition and landmarking technology leveraging the webcam to monitor the sleepiness level of truck drivers in real time. By analyzing facial cues and patterns, the system assesses signs of drowsiness, alerting the driver and playing a warning sound to wake the driver up. This innovative feature not only prioritizes the well-being of drivers but also enhances overall fleet management efficiency.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"background": "white", "alignItems": "center", "width": "27vw", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px", "borderRadius": "8px", "overflowX": "wrap", "overflowY": "scroll", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px", "marginTop": "15px"}} size={`6`}>
  {`Livestream Heartrate`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "10px", "marginRight": "10px", "size": "8"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`3`}>
  {`Our project integrates a real-time heart rate monitor to continuously track the heart rate of truck drivers during their journeys. By leveraging this data, our system provides insight into the driver's stress levels and  fatigue. With our advanced heart rate monitoring feature, we prioritize the health and performance of truck drivers, contributing to enhanced fleet management and overall operational excellence.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"width": "100%", "height": "35%"}}>
  <img css={{"width": "100%", "height": "100%", "fit": "cover"}} src={`/heart-rate-banner.png`}/>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"background": "white", "alignItems": "center", "width": "27vw", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px", "borderRadius": "8px", "overflowX": "wrap", "overflowY": "scroll", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesBox css={{"width": "100%", "height": "35%"}}>
  <img css={{"width": "100%", "height": "100%", "fit": "cover"}} src={`/webcam.png`}/>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px", "marginTop": "15px"}} size={`6`}>
  {`Webcam Integration`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "10px", "marginRight": "10px", "size": "8"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`3`}>
  {`Our project incorporates facial recognition and landmarking technology leveraging the webcam to monitor the sleepiness level of truck drivers in real time. By analyzing facial cues and patterns, the system assesses signs of drowsiness, alerting the driver and playing a warning sound to wake the driver up. This innovative feature not only prioritizes the well-being of drivers but also enhances overall fleet management efficiency.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"background": "white", "alignItems": "center", "width": "27vw", "height": "60vh", "marginBottom": "20px", "marginTop": "20px", "marginRight": "20px", "marginLeft": "20px", "borderRadius": "8px", "overflowX": "wrap", "overflowY": "scroll", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesHeading css={{"textAlign": "center", "padding": "5px", "marginTop": "15px"}} size={`6`}>
  {`Livestream Heartrate`}
</RadixThemesHeading>
  <Fragment>
  <RadixThemesBox css={{"marginBottom": "5px", "marginTop": "5px", "marginLeft": "10px", "marginRight": "10px", "size": "8"}}>
  <RadixThemesText as={`p`} css={{"textAlign": "center"}} size={`3`}>
  {`Our project integrates a real-time heart rate monitor to continuously track the heart rate of truck drivers during their journeys. By leveraging this data, our system provides insight into the driver's stress levels and  fatigue. With our advanced heart rate monitoring feature, we prioritize the health and performance of truck drivers, contributing to enhanced fleet management and overall operational excellence.`}
</RadixThemesText>
</RadixThemesBox>
</Fragment>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"width": "100%", "height": "35%"}}>
  <img css={{"width": "100%", "height": "100%", "fit": "cover"}} src={`/heart-rate-banner.png`}/>
</RadixThemesBox>
</RadixThemesFlex>
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
  {`home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
