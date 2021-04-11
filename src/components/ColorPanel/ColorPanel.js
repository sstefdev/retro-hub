import React, { Component } from "react";
import {
  Sidebar,
  Menu,
  Divider,
  Button,
  Modal,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";
import { SliderPicker } from "react-color";

class ColorPanel extends Component {
  state = {
    modal: false,
    primary: "#2cae59",
    secondary: "#a8a8a8",
  };

  handleChangePrimary = (color) => this.setState({ primary: color.hex });
  handleChangeSecondary = (color) => this.setState({ secondary: color.hex });

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  render() {
    const { modal, primary, secondary } = this.state;

    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        <Divider />

        <Button
          icon="add"
          size="small"
          color="green"
          onClick={this.openModal}
        />

        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Choose App Theme</Modal.Header>
          <Modal.Content>
            <Segment inverted>
              <Label content="Primary Color" />
              <SliderPicker
                color={primary}
                onChange={this.handleChangePrimary}
              />
            </Segment>

            <Segment inverted>
              <Label content="Secondary Color" />
              <SliderPicker
                color={secondary}
                onChange={this.handleChangeSecondary}
              />
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Save Theme
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="checkmark" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Sidebar>
    );
  }
}

export default ColorPanel;
