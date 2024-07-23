import React from 'react';


const Campaigns = () => {

    return(
        <div className='container'>
            <form>
                <label style={{display:"block"}}>Campaign Name</label>
                <input type="text" />
                <hr/>
                <select name="Templates" className='select'>
                    <option>Template 1</option>
                    <option>Template 2</option>
                    <option>Template 3</option>
                </select>
            </form>

        </div>

    );
}
export default Campaigns;