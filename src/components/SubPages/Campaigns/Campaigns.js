import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Campaigns = () => {
  // State for form data
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  // State for fetched data
  const [messageTemplates, setMessageTemplates] = useState([]);
  const [tags, setTags] = useState([]);
  const [addresses, setAddresses] = useState([]);

  //success message
  const [success, setSuccess] = useState(false);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const templatesResponse = await axios.get(
          "http://127.0.0.1:8000/message/unique/"
        );
        const tagsResponse = await axios.get(
          "http://127.0.0.1:8000/message/unique/"
        );
        const addressesResponse = await axios.get(
          "http://127.0.0.1:8000/message/unique/"
        );

        setMessageTemplates(templatesResponse.data["unique_templates"]);
        setTags(tagsResponse.data["unique_tags"]);
        setAddresses(addressesResponse.data["unique_addresses"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/message/campaigns/",
        {
          selectedTemplate,
          selectedTag,
          selectedAddress,
        }
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      console.log("Campaign sent:", response.data);
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error("Error sending campaign:", error);
      // Handle error state
    }
  };

  // Handle template selection
  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  // Handle tag selection
  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  // Handle address selection
  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <div className="container" style={{maxWidth:"40rem"}}>
      <Form onSubmit={handleSubmit} className="m-5">
        <Form.Group controlId="formTemplate" className="m-4">
          <Form.Label>Select Message Template:</Form.Label>
          <Form.Control
            as="select"
            value={selectedTemplate}
            onChange={handleTemplateChange}
          >
            <option value="">Select a template</option>
            {messageTemplates.map((template, index) => (
              <option key={index} value={template}>
                {template}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formTags" className="m-4">
          <Form.Label>Select Tag:</Form.Label>
          <Form.Control
            as="select"
            value={selectedTag}
            onChange={handleTagChange}
          >
            <option value="">Select a tag</option>
            {tags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAddresses" className="m-4">
          <Form.Label>Select Address:</Form.Label>
          <Form.Control
            as="select"
            value={selectedAddress}
            onChange={handleAddressChange}
          >
            <option value="">Select an address</option>
            {addresses.map((address, index) => (
              <option key={index} value={address}>
                {address}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {success ? (
          <div
            className="alert alert-success p-1"
            style={{
              marginLeft: "1.5rem",
              marginTop: "1rem",
              maxWidth: "14%",
            }}
          >
            success
          </div>
        ) : (
          <span></span>
        )}

        <Button variant="primary" type="submit" className="m-4">
          Send Broadcast
        </Button>
      </Form>
    </div>
  );
};

export default Campaigns;
