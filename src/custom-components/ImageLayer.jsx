import React from "react/addons";
import Base from "./../base";
import Radium from "radium";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "./../spectacle";

@Radium
class ImageLayer extends Base {
  render() {
    return (
      <div className="image-layer" style={{minHeight: this.props.height, left: "calc((920px - " + this.props.width + ")/2)"}}>
        <List>
          {React.Children.map(this.props.children, item => {
            return (
              <Appear>{item}</Appear>
            )
          })
        }
        </List>
      </div>
    );
  }
}

export default ImageLayer;
