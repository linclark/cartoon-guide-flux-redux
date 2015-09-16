import React from "react/addons";
import Base from "./../base";
import Radium from "radium";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "./../spectacle";

@Radium
class CharacterCard extends Base {
  render() {
    return (
      <div className="card" style={{backgroundImage: "url(" + this.props.image + ")"}}>
        <div className="details">
          <Heading size={3}>{this.props.title}</Heading>
          <List>
            {React.Children.map(this.props.children, item => {
              return (
                <Appear><ListItem transition={["fade"]}>item</ListItem></Appear>
              )
            })
          }
          </List>
      </div>
      </div>
    );
  }
}

export default CharacterCard;
