import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import {
  CharacterCard,
  ImageLayer
} from "../src/custom-components/components";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  title: require("./title.png"),
  messageNotificationOff: require("./message-notification-off.png"),
  messageNotificationOn: require("./message-notification-on.png"),
  modelView1: require("./model-view1.png"),
  modelView2: require("./model-view2.png"),
  modelView3: require("./model-view3.png"),
  fluxDiagram: require("./flux-diagram.png"),
  store: require("./store.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={800}>
        <Slide>
          <Image src={images.title} />
        </Slide>
        <Slide>
          <Heading size={2}>The Problem</Heading>
          <ImageLayer height="535px" width="700px">
            <Image src={images.messageNotificationOff} />
            <Image src={images.messageNotificationOn} />
            <Image src={images.modelView1} />
            <Image src={images.modelView2} />
            <Image src={images.modelView3} />
          </ImageLayer>
        </Slide>
        <Slide>
          <Image src={images.fluxDiagram} />
        </Slide>
        <Slide>
          <CharacterCard image={images.store}>
            <ListItem>one</ListItem>
            <ListItem>two</ListItem>
          </CharacterCard>
        </Slide>
      </Deck>
    );
  }
}
