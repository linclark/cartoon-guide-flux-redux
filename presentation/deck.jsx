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
  action: require("./action.png"),
  dispatcher: require("./dispatcher.png"),
  store: require("./store.png"),
  view: require("./view.png")
};

let interactionImages = [];
for (let i = 0; i < 8; i++) {
  interactionImages.push(require(`./setup-${i}.png`));
}
for (let i = 0; i < 12; i++) {
  interactionImages.push(require(`./step-${i}.png`));
}

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
          <CharacterCard image={images.action} title="The Action Creator">
            <ListItem>formats actions to send to the dispatcher</ListItem>
            <ListItem>provides an API of all possible state changes</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <CharacterCard image={images.dispatcher} title="The Dispatcher">
            <ListItem>registry of callbacks</ListItem>
            <ListItem>moves actions from creator to stores</ListItem>
            <ListItem>action is dispatched to every registered callback</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <CharacterCard image={images.store} title="The Store">
            <ListItem>stores application state</ListItem>
            <ListItem>all state-change logic lives here</ListItem>
            <ListItem>no setters. only way in is actions</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <CharacterCard image={images.view} title="The Controller View and The View">
            <ListItem>renders data that the store gives it</ListItem>
          </CharacterCard>
        </Slide>
        <Slide>
          <ImageLayer height="535px" width="700px">
            {interactionImages.map(src => {
              return (<Image src={src} />)
            })
          }
          </ImageLayer>
        </Slide>
      </Deck>
    );
  }
}
