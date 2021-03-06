import React from "react";
import { FaPlus } from "react-icons/fa";
class AddIconButton extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <button className="btn" onClick={this.props.handleOpen} title="Adicionar item">
        <FaPlus />
      </button>
    );
  }
}

export default AddIconButton;
