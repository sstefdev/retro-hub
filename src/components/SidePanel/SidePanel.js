import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";

class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Menu
        size="large"
        inverted
        fiex="left"
        vertical
        style={{
          marginTop: 0,
          marginBottom: 0,
          marginRight: 0,
          marginLeft: "4.2rem",
          background:
            "linear-gradient(180deg, rgba(8,48,22,1) 0%, rgba(47,184,95,1) 100%)",
          fontSize: "1.2rem",

          borderRadius: 0,
        }}
      >
        <UserPanel currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
