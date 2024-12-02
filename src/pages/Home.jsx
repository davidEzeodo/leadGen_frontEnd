import NavSearch from "../components/NavSearch";
import SidePane from "../components/SidePane";
import './HomeStyles.css'
const Home = () =>{
    return(
        <div className="main-container">
            <div className="main">
                <div className="side-pane">
                    <SidePane/>
                </div>
                <div className="nav-search">
                    <NavSearch/>
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
                            <div className="row">
                                <h4>N/A</h4>
                            </div>
                            <div className="row">
                                <h4>N/A</h4>
                            </div>
                            <div className="row">
                                <h4>N/A</h4>
                            </div>
                            <div className="row">
                                <h4>N/A</h4>
                            </div>
                        </div>
                    
                    </div>
                    {/* <div className="message-contianer">
                            <div className="message">
                                <h3>We're delighted to have you here.</h3>
                                <span>You are required to input values into the input fields in the nav section to search for leads.</span>
                            </div>
                        </div> */}
                </div>
            </div>
            
        </div>
        
    )
}
export default Home; 