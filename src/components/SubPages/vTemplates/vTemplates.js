import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { RiAddCircleFill } from "react-icons/ri";
import Popup from "reactjs-popup";
import axios from "axios";
import MessageForm from "../../MessageForm/MessageForm";
import "./popup.css";

const VTemplates = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/message/templates/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return <span className="badge bg-warning">Pending</span>;
      case "Approved":
        return <span className="badge bg-success">Approved</span>;
      case "Declined":
        return <span className="badge bg-danger">Declined</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const formatMessage = (msg) => {
    const formattedMsg = msg.replaceAll("/n", "<br/>");
    return (
      <p className="m-0" dangerouslySetInnerHTML={{ __html: formattedMsg }}></p>
    );
  };
  return (
    <div className="container mt-5">
      {/* Popup Trigger */}
      <Popup
        trigger={
          <button className="btn btn-dark">
            <RiAddCircleFill className="mx-2" />
            Add Reply
          </button>
        }
        modal
        nested
      >
        <MessageForm />
      </Popup>

      {/* Table */}
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Type</th>
            <th>Dates Requested</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{request.template_name}</td>
              <td>{request.template_type}</td>
              <td>{request.date}</td>
              <td>{getStatusBadge(request.status)}</td>
              <td>
                <Popup
                  trigger={<span className="btn btn-dark">View</span>}
                  modal
                  nested
                >
                  <div className="message-container px-5 mt-1" style={{width:"100%"}}>
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
                            {formatMessage(request.template_message)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VTemplates;
