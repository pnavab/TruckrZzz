/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Box, Center, Image as ChakraImage } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


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

export function Reactplayer_d2dab0437e9f582cb58fa94ea5170332 () {
  const state__webcam_state = useContext(StateContexts.state__webcam_state)


  return (
    <ReactPlayer controls={true} playing={state__webcam_state.drowsy} url={`/alarm_long.mp3`}/>
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

export function Image_a2c4c9ebbb5585a73430ea664dfb0b77 () {
  const state__webcam_state = useContext(StateContexts.state__webcam_state)


  return (
    <ChakraImage src={state__webcam_state.processed_frame} sx={{"width": "80%", "height": "auto"}}/>
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
  <Center>
  <Box sx={{"position": "relative"}}>
  <ChakraImage src={`/pngtree-iphone-14-png-image_6538682.png`} sx={{"width": "150%", "height": "150%", "zIndex": "-1"}}/>
</Box>
  <Box sx={{"position": "absolute", "top": "40%", "left": "50%", "transform": "translate(-50%, -60%)"}}>
  <Image_a2c4c9ebbb5585a73430ea664dfb0b77/>
</Box>
</Center>
  <Reactplayer_d2dab0437e9f582cb58fa94ea5170332/>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`webcam`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
