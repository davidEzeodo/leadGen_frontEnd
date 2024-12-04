import { useState } from "react";
import NavSearch from "../components/NavSearch";
import SidePane from "../components/SidePane";
import "./HomeStyles.css";

const Home = () => {
  const [leads, setLeads] = useState([]);

  const handleFetchLeads = (data) => {
    setLeads(data); // Update the state with the fetched leads
  };

  return (
    <div className="main-container">
      <div className="main">
        <div className="side-pane">
          <SidePane />
        </div>
        <div className="nav-search">
          <NavSearch onFetchLeads={handleFetchLeads} />
          <div className="container-for-displaying-leads">
            <div className="column-headers">
              <div className="column">
                <h5>Name</h5>
              </div>
              <div className="column">
                <h5>Email</h5>
              </div>
              <div className="column">
                <h5>Company</h5>
              </div>
              <div className="column">
                <h5>Location</h5>
              </div>
            </div>
            <div className="row-content">
              {leads.length > 0 ? (
                leads.map((lead, index) => (
                  <div key={index} className="row">
                    <div className="column">
                      <h4>{lead.title || "N/A"}</h4>
                    </div>
                    <div className="column">
                      <h4>{lead.emails?.join(", ") || "N/A"}</h4>
                    </div>
                    <div className="column">
                      <h4>{lead.url || "N/A"}</h4>
                    </div>
                    <div className="column">
                      <h4>{"N/A"}</h4> {/* Location placeholder */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="row">
                  <h4>No leads available</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
