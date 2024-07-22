import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import Charsts from "../../Charts/Charts";
import { Table } from "react-bootstrap";
import { FaMessage } from "react-icons/fa6";

const Main = () => {
  const requests = [
    { name: 'Robert Fox', type: 'text', dates: 'Sep 12', duration: '5 days'},
    { name: 'Arlene McCoy', type: 'img', dates: 'Aug 2', duration: '8 days'},
    { name: 'Arlene McCoy', type: 'video', dates: 'Aug 2', duration: '8 days'},
    { name: 'Arlene McCoy', type: 'document', dates: 'Aug 2', duration: '8 days'},
    { name: 'Arlene McCoy', type: 'text', dates: 'Aug 2', duration: '8 days'},
    // Add other requests here...
  ];

  return (
    <div className="d-flex">
      <div class="cols mx-4">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div
            class="card mb-3 mt-4 border border-1 border-black rounded"
            style={{ width: "14rem", border: "none" }}
          >
            <div class="card-body p-1">
              <h5 class="card-title" style={{ fontSize: "2rem" }}>
                <HiTemplate />
              </h5>
              <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-end">
                Varified Templates{" "}
              </h6>
              <span
                className="d-flex justify-content-end mx-5"
                style={{ fontSize: "24px" }}
              >
                <b>5</b>
              </span>
              <p class="card-text">
                <span class="text-success text-sm font-weight-bolder">
                  +3%{" "}
                </span>
                than last month
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div
            class="card mb-3 border border-1 border-black rounded"
            style={{ width: "14rem", border: "none" }}
          >
            <div class="card-body p-1">
              <h5 class="card-title" style={{ fontSize: "2rem" }}>
                <IoPersonSharp />
              </h5>
              <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-end">
                Total Contacts
              </h6>
              <span
                className="d-flex justify-content-end mx-5"
                style={{ fontSize: "24px" }}
              >
                <b>5,000</b>
              </span>
              <p class="card-text">
                <span class="text-success text-sm font-weight-bolder">
                  +3%{" "}
                </span>
                than last month
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 ">
          <div
            class="card mb-3 border border-1 border-black rounded"
            style={{ width: "14rem", border: "none" }}
          >
            <div class="card-body p-1">
              <h5 class="card-title" style={{ fontSize: "2rem" }}>
                <IoPersonSharp />
              </h5>
              <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-end">
                New Added Contacts
              </h6>
              <span
                className="d-flex justify-content-end mx-5"
                style={{ fontSize: "24px" }}
              >
                <b>2,500</b>
              </span>
              <p class="card-text">
                <span class="text-success text-sm font-weight-bolder">
                  +3%{" "}
                </span>
                than last month
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div
            class="card border border-1 border-black rounded"
            style={{ width: "14rem", border: "none" }}
          >
            <div class="card-body p-1">
              <h5 class="card-title" style={{ fontSize: "2rem" }}>
                <FaMessage />
              </h5>
              <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-end">
                Total Replies
              </h6>
              <span
                className="d-flex justify-content-end mx-5"
                style={{ fontSize: "24px" }}
              >
                <b>25</b>
              </span>
              <p class="card-text">
                <span class="text-danger text-sm font-weight-bolder">
                  -3%{" "}
                </span>
                than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cols w-100">
        <Charsts/>
        <h2 className="mt-4">Top Replies</h2>
        <Table className="mt-3 border-top">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Type</th>
                <th>Dates Received</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody >
              {requests.map((request, index) => (
                <tr key={index} >
                  <td>{index+1}</td>
                  <td>{request.name}</td>
                  <td>{request.type}</td>
                  <td>{request.dates}</td>
                  <td><span className="btn btn-dark p-1"> Click</span></td>
                </tr>
              ))}
            </tbody>
          </Table>
      </div>
      
    </div>
  );
};

export default Main;
