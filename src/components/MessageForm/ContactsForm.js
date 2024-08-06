import React, { Component } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import "./contact.css";
import axios from "axios";

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      tags: []
    };
  }

  handleChange = (tags) => {
    this.setState({ tags });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend
    axios.post('http://127.0.0.1:8000/message/contacts/', this.state)
      .then(response => {
        console.log("Form submitted successfully:", response.data);
        // Reset form fields if needed
        this.setState({
          name: "",
          phone: "",
          address: "",
          tags: []
        });
      })
      .catch(error => {
        console.error("There was an error submitting the form:", error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="phone">Phone no</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label>Tags</label>
            <TagsInput value={this.state.tags} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;
