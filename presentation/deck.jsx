import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import {
  CharacterCard
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
          <div className="image-layer">
            <Heading size={2}>The Problem</Heading>
            <Appear><Image src={images.messageNotificationOff} /></Appear>
            <Appear><Image src={images.messageNotificationOn} /></Appear>
            <Appear><Image src={images.modelView1} /></Appear>
            <Appear><Image src={images.modelView2} /></Appear>
            <Appear><Image src={images.modelView3} /></Appear>
          </div>
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
