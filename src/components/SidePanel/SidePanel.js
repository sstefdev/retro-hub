import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";

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
          background:
            "linear-gradient(180deg, rgba(8,48,22,1) 0%, rgba(47,184,95,1) 100%)",
          fontSize: "1.2rem",
          margin: 0,
          borderRadius: 0,
        }}
      >
        <UserPanel currentUser={currentUser} />
        <Channels currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
