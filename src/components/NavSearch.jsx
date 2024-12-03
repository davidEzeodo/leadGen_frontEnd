import './NavSearchStyles.css'
const NavSearch = () =>{
    return(
        <div className="navContainer">
            <div className='navArea'>
                <div className='input-section'>
                    <div className='input-header'>
                        <h5>OCCUPATION</h5>
                    </div>
                    <div><input type='text' placeholder='Enter occupation'/></div>
                </div>
                <div className='input-section'>
                    <div className='input-header'>
                        <h5>CITY</h5>
                    </div>
                    <div><input type='text' placeholder='Enter city'/></div>
                </div>
                <div className='input-section'>
                    <div className='input-header'>
                        <h5>KEYWORD</h5>
                    </div>
                    <div><input type='text' placeholder='Enter keyword'/></div>
                </div>
                <div className='input-section'>
                    <div className='input-header'>
                        <h5>FILETYPE</h5>
                    </div>
                    <div><input type='text' placeholder='Enter file type'/></div>
                </div>
                <button>
                    Find my leads
                </button>
            </div>
        </div>
    )
}
export default NavSearch;