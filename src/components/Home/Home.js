import React, { useState } from "react";
import { MdCampaign } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import Main from "../SubPages/Main/Main";
import Campaigns from "../SubPages/Campaigns/Campaigns";
import VTemplates from "../SubPages/vTemplates/vTemplates";

const Home = () => {
  const [activePage, setActivePage] = useState("main");
  const [main, setMain] = useState(true);
  const [campaigns, setCampaigns] = useState(false);
  const [history, setHistory] = useState(false);
  const [templates, setTemplates] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
    switch (page) {
      case "main":
        setMain(true);
        setCampaigns(false);
        setHistory(false);
        setTemplates(false);
        break;
      case "campaigns":
        setMain(false);
        setCampaigns(true);
        setHistory(false);
        setTemplates(false);
        break;
      case "history":
        setMain(false);
        setCampaigns(false);
        setHistory(true);
        setTemplates(false);
        break;
      case "templates":
        setMain(false);
        setCampaigns(false);
        setHistory(false);
        setTemplates(true);
        break;
      default:
        break;
    }
  };
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
          <span style={{ paddingTop: "2rem" }}>
            <span
              className={`p-2 ${activePage === "main" ? "mx-3 px-3 border border-3 rounded bg-black text-white" : ""}`}
              onClick={() => handleClick("main")}
            >
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <IoHome />
                </i>
                Main
              </b>
            </span>
          </span>

          <span style={{ paddingTop: "2rem" }}>
            <span className={`p-2 ${activePage === "templates" ? "mx-3 px-3 border border-3 rounded bg-black text-white" : ""}`} onClick={() => handleClick("templates")}>
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <HiTemplate />
                </i>
                Templates
              </b>
            </span>
          </span>

          <span style={{ paddingTop: "2rem" }}>
            <span className={`p-2 ${activePage === "campaigns" ? "mx-3 px-3 border border-3 rounded bg-black text-white" : ""}`} onClick={() => handleClick("campaigns")}>
              <b>
                <i className="px-2" style={{ fontSize: "1.5rem" }}>
                  <MdCampaign />
                </i>
                Campaigns
              </b>
            </span>
          </span>

          <span style={{ paddingTop: "2rem" }}>
            <span className={`p-2 ${activePage === "history" ? "mx-3 px-3 border border-3 rounded bg-black text-white" : ""}`} onClick={() => handleClick("history")}>
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
          {main && <Main />}
          {campaigns && <Campaigns />}
          {history && <div>History Page</div>}
          {templates && <VTemplates />}
        </span>
      </div>
    </div>
  );
};

export default Home;
