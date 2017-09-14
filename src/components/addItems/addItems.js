import React, { Component } from 'react';
import { Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import submitInfo from '../../actions/addItemsAction';
import Spinner from '../assets/spinner/spinner';

import './style.scss';

const FormItems = (props) => {
  if (props.formType === "itemDescription") {
    return (
      <FormGroup>
        <ControlLabel className="additem-label">{props.labelTitle}</ControlLabel>
          <FormControl componentClass="textarea" type="text" placeholder={props.placeHolderText} onChange={(event) => props.updateData(props.formType, event)}  />
      </FormGroup>
    );
  } else {
    return (
      <FormGroup>
        <ControlLabel className="additem-label">{props.labelTitle}</ControlLabel>
        <FormControl type="text" placeholder={props.placeHolderText} onChange={(event) => props.updateData(props.formType, event)}  />
      </FormGroup>
    );
  };
};

class AddItems extends Component {

  constructor(props) {
    super(props);

    this.checkValidation = this.checkValidation.bind(this);
    this.submitInfoHandler = this.submitInfoHandler.bind(this);
    this.state = {
      itemName: "",
      itemPrice: "",
      itemDescription: "",
      itemLocation: ""
    };
  }

  // Perform Validation
  checkValidation(type, event) {
    switch (type) {
      case "itemName":
        this.setState({itemName: event.target.value});
        break;
      case "itemPrice":
        this.setState({itemPrice: event.target.value});
        break;
      case "itemDescription":
        this.setState({itemDescription: event.target.value});
        break;
      case "itemLocation":
        this.setState({itemLocation: event.target.value});
        break;
      default:
        console.log("SOMETHING WONG IF HERE");;
    }
  }

  submitInfoHandler() {
    // This is terrible code, but need to get something working and don't want to figure out setstate for inner functions.
    // FIXME God so bad
    let itemInfo = {
      itemName: this.state.itemName,
      itemPrice: this.state.itemPrice,
      itemDescription: this.state.itemDescription,
      itemLocation: this.state.itemLocation,
      timeAdded: Date.now()
    };
    console.log(itemInfo);
    this.props.submitInfo(itemInfo);
  }

  render() {
    return (
      <div className="addlisting-container">
        <div className="addlisting-title">
          <h2> Add Your Item </h2>
        </div>
        <FormItems formType="itemName" labelTitle='Item Name' placeHolderText='Enter item name' updateData={ this.checkValidation }/>
        <FormItems formType="itemPrice" labelTitle='Price' placeHolderText='Enter price' updateData={ this.checkValidation }/>
        <FormItems formType="itemDescription" labelTitle='Description' placeHolderText='Enter description' updateData={ this.checkValidation }/>
        <FormItems formType="itemLocation" labelTitle='Location' placeHolderText='Enter location' updateData={ this.checkValidation }/>
        { this.props.isAdding ? (
          <Spinner />
        ) : (
          <Button bsSize="large" className="submit-button" onClick={this.submitInfoHandler}>
            Add Listing
          </Button>
        )}
        { this.props.itemAdded ? (
          <h2>
            Item Added
          </h2>
        ) : (
          ""
        )}

      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    isAdding: state.addItemsInfo.isAdding,
    itemAdded: state.addItemsInfo.itemAddedStatus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitInfo: submitInfo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItems);
