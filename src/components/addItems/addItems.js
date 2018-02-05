import React, { Component } from 'react';
import { Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import submitInfo from '../../actions/addItemsAction';
import Spinner from '../assets/spinner/spinner';
import Dropzone from 'react-dropzone';
import axios from 'axios';

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
    this.onDrop = this.onDrop.bind(this);
    this.getSignedRequest = this.getSignedRequest.bind(this);
    this.uploadFile = this.uploadFile.bind(this);

    this.state = {
      itemName: "",
      itemHelpers: [],
      itemDescription: "",
      itemTags: [],
      itemImageUrl: "",
      itemSignedRequest: "",
      itemImage: null
    };
  }

  // Dropzone Function
  onDrop(files) {
    this.setState({itemImage: files[0]});
    this.getSignedRequest(files[0]);
  }

  getSignedRequest(file) {
    return axios.get(`/api/sign-s3?file-name=${file.name}&file-type=${file.type}`)
    .then(response => {
      console.log(response.data);
      this.setState({itemSignedRequest: response.data.signedRequest});
      this.setState({itemImageUrl: response.data.url});
    }).catch(error => {
      console.log(error);
    });
  }

  uploadFile(file, signedRequest, url) {
    return axios.put(signedRequest, file)
    .then(response => {
      console.log('itemUploaded');
      console.log(url);
    }).catch(error => {
      console.log('Could not upload file.');
    });
  }

  // Perform Validation
  checkValidation(type, event) {
    switch (type) {
      case "itemName":
        this.setState({itemName: event.target.value});
        break;
      case "itemHelpers":
        this.setState({itemHelpers: event.target.value});
        break;
      case "itemDescription":
        this.setState({itemDescription: event.target.value});
        break;
      case "itemTags":
        this.setState({itemTags: event.target.value});
        break;
      default:
        console.log("SOMETHING WONG IF HERE");;
    }
  }

  submitInfoHandler() {
    // This is terrible code, but need to get something working and don't want to figure out setstate for inner functions.
    // FIXME God so bad
    let { helpers, tags } = [];

    if (this.state.itemHelpers.length >= 1) {
      helpers = this.state.itemHelpers.split(",");
      helpers.forEach((helper, i) => {
        helpers[i] = helper.trim();
      });

    }

    if (this.state.itemTags.length >= 1) {
      tags = this.state.itemTags.split(",");
      tags.forEach((tag, i) => {
        tags[i] = tag.trim();
      });
    }

    let projectInfo = {
      itemName: this.state.itemName,
      itemHelpers: helpers,
      itemDescription: this.state.itemDescription,
      itemTags: tags,
      itemImageUrl: this.state.itemImageUrl,
      timeAdded: Date.now()
    };

    if (!this.state.itemImage) {
      projectInfo.itemImageUrl = "https://rentyours.s3.amazonaws.com/Octocat.png";
    } else {
      this.uploadFile(this.state.itemImage, this.state.itemSignedRequest, this.state.itemImageUrl);
    }

    console.log(projectInfo);

    this.props.submitInfo(projectInfo);
  }

  render() {
    return (
      <div className="addlisting-container">
        <div className="addlisting-title">
          <h2> List Your Project </h2>
        </div>
        <FormItems formType="itemName" labelTitle='Project Name' placeHolderText='Enter item name' updateData={ this.checkValidation }/>
        <FormItems formType="itemHelpers" labelTitle='Help Needed?' placeHolderText='Enter what you are looking for' updateData={ this.checkValidation }/>
        <FormItems formType="itemDescription" labelTitle='Description' placeHolderText='Enter description' updateData={ this.checkValidation }/>
        <FormItems formType="itemTags" labelTitle='Tags' placeHolderText='Enter tags' updateData={ this.checkValidation }/>
        <Dropzone className="item-image" onDrop={this.onDrop}>
          <p>Upload image of item</p>
        </Dropzone>
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
