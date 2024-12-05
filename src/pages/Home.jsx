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
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {leads.length > 0 ? (
                  leads.map((lead, index) => (
                    <tr key={index}>
                      <td>{lead.title || "N/A"}</td>
                      <td>{Array.isArray(lead.url) ? lead.url.join(", ") : lead.url || "N/A"}</td>
                      <td>{lead.emails?.length > 0 ? lead.emails.join(", ") : "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No leads available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
