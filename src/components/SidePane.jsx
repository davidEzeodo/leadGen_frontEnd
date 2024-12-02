import './SidePaneStyles.css'
const SidePane =()=>{
    return(
        <div className="parent-container">
            <div className="sidepane-area"> 
                <div className='logo'>
                    <h3>LeadGen</h3>
                </div>
                <div className='nav-menuContainer'>
                    <ul>
                        <li><a href='#'>Ai Search</a></li>
                        <li><a href='#'>Lead lists</a></li>
                        <li><a href='#'>Chat</a></li>
                        <li><a href='#'>Reports</a></li>
                        <li><a href='#'>Leads</a></li>
                        <li><a href='#'>API Keys</a></li>
                        <li><a href='#'>Notifications</a></li>
                        <li><a href='#'>Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SidePane;