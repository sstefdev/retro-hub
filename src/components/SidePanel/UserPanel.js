import React, { Component } from "react";
import firebase from "../../firebase";

import { Dropdown, Grid, Header, Image } from "semantic-ui-react";
import Logo from "../../assets/retro-hub-mini-logo.png";

class UserPanel extends Component {
  state = {
    user: this.props.currentUser,
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "avatar",
      text: <span>Change Profile Pic</span>,
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span>,
    },
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed out"));
  };

  render() {
    const { user } = this.state;

    return (
      <Grid
        style={{
          background: "transparent",
          paddingTop: "1em",
        }}
      >
        <Grid.Column>
          <Grid.Row
            style={{
              marginBottom: "1rem",
              marginTop: "-1.5rem",
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            <Header inverted floated="left" as="h2">
              <Image
                src={Logo}
                style={{ width: "5rem", marginBottom: "1rem" }}
                fluid
              />
              <Header.Content style={{ padding: 0 }}>Retro Hub</Header.Content>
            </Header>

            <Header
              style={{
                padding: ".85em",
                paddingTop: "2em",
              }}
              as="h4"
              inverted
            >
              <Dropdown
                trigger={
                  <span>
                    <Image src={user.photoURL} spaced="right" avatar />
                    {user.displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
