import React from "react";
import { MdCampaign } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import Main from "../SubPages/Main/Main";

const Home = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-2">
        <span
          className="card"
          style={{
            borderRadius: "24px",
            border: "None",
            paddingBottom: "2rem",
          }}
        >
          <span style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
            <span className="p-2">
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <IoHome />
                </i>
                Main
              </b>
            </span>
          </span>

          <span style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
            <span className="p-2">
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <MdCampaign />
                </i>
                Campaigns
              </b>
            </span>
          </span>

          <span style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
            <span className="p-2">
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <HiTemplate />
                </i>
                Templates
              </b>
            </span>
          </span>

          <span style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
            <span className="p-2">
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <RiChatHistoryFill />
                </i>
                History
              </b>
            </span>
          </span>
        </span>
      </div>
      <div className="col-md-10">
        <span
          className="card"
          style={{ height: "100vh", borderRadius: "24px", border: "None" }}
        >
            <Main/>
        </span>
      </div>
    </div>
  );
};

export default Home;
