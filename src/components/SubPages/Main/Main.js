import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import Charsts from "../../Charts/Charts";
import { Card, ListGroup, Dropdown, ButtonGroup } from "react-bootstrap";

const Main = () => {
  return (
    <div className="m-4 d-flex">
      <div class="cols w-25">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div
            class="card mb-5 mt-4 shadow mb-5 bg-body rounded"
            style={{ width: "18rem", border: "none" }}
          >
            <div class="card-body">
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
            class="card mb-5 shadow mb-5 bg-body rounded"
            style={{ width: "18rem", border: "none" }}
          >
            <div class="card-body">
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
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div
            class="card mb-5 shadow mb-5 bg-body rounded"
            style={{ width: "18rem", border: "none" }}
          >
            <div class="card-body">
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
      </div>
      <div className="cols mx-4">
        <Charsts />

        <span>
          <Card
            className="shadow mb-5 bg-body rounded"
            style={{ width: "50rem", border: "none" }}
          >
            <Card.Header style={{ backgroundColor: "black", color: "white" }}>
              <div className="d-flex justify-content-between align-items-center">
                <span>Current Tasks</span>
                <span>Done 30%</span>
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle
                    split
                    variant="secondary"
                    id="dropdown-split-basic"
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Week</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Year</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-1">
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span>Product Review for UI8 Market</span>
                  </div>

                  <small className="text-muted">In progress</small>

                  <small>4h</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span>UX Research for Product</span>
                  </div>

                  <small className="text-muted">On hold</small>

                  <small>8h</small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </span>
      </div>
    </div>
  );
};

export default Main;
