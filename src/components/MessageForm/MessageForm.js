import axios from "axios";
import React, { useState } from "react";
// import './MessageForm.css'; // Custom CSS for styling

const MessageForm = () => {
  const [template, setTemplate] = useState({
    template_name: "",
    templates_message: "",
    template_type: "",
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTemplate((prevTemplate) => ({
      ...prevTemplate,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/message/templates/",
        {
          template_name: template.template_name,
          template_type: template.template_type,
          templates_message: template.templates_message,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        setTemplate({
          template_name: "",
          templates_message: "",
          template_type: "",
        });
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
      return response;
      // Optionally handle form submission success here
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      // Optionally handle form submission error here
    }
  };

  const formatMessage = (msg) => {
    const formattedMsg = msg.replaceAll("/n", "<br/>");
    return (
      <p className="m-0" dangerouslySetInnerHTML={{ __html: formattedMsg }}></p>
    );
  };

  return (
    <div className="container mt-4 d-flex">
      <span>
        <h2>Reply Message Form</h2>
        {success ? (
          <div className="alert alert-success p-1">success</div>
        ) : (
          <span></span>
        )}
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column form-group">
            <label>Enter your Reply Name :</label>
            <input
              className="form-control m-2"
              name="template_name"
              value={template.template_name}
              onChange={handleInputChange}
            />
            <select
              class="form-select m-2"
              aria-label="Default select example"
              name="template_type"
              value={template.template_type}
              onChange={handleInputChange}
            >
              <option selected>Select Reply Type</option>
              <option value="Reply">Reply</option>
              <option value="Template">Template</option>
            </select>
            <label htmlFor="messageInput">Enter your Reply message:</label>
            <span style={{ fontSize: "0.75rem", color: "#BEBFC5" }}>
              (eg. use /n to change line)
            </span>
            <textarea
              className="form-control m-2"
              rows="8"
              name="templates_message"
              value={template.templates_message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Send
          </button>
        </form>
      </span>
      <div className="message-container px-5 mt-1">
        <h3 style={{ marginBottom: "2rem" }}>Preview:</h3>
        <div id="whatsappMessage">
          <div className="media">
            <div className="media-body">
              <p
                className="float-right"
                style={{
                  backgroundColor: "#2A3439",
                  color: "white",
                  borderRadius: "1rem",
                  padding: "0.5rem",
                }}
              >
                {formatMessage(template.templates_message)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
