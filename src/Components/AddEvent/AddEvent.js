import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Images/Group 1329.png';


const AddEvent = () => {

    const handleAddWorks = () => {
        fetch('http://localhost:4200/addWorks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })
    }
    return (
        <>
            <div
                style={{ width: '100%', height: 'auto', padding: '10px 0', background: '#E5E5E5' }}>
                <div className="container">
                    <div className='d-flex'>
                        <Link to='/home'>
                            <img style={{ height: '70px', lineHeight: '20px' }} src={logo} alt="logo" />
                        </Link>
                        <h4 style={{ lineHeight: '60px', marginLeft: '50px' }}>
                            Add Events
                        </h4>
                    </div>
                </div>
                <div>
                    <div style={{
                        width: '20%', float: 'left',
                        background: '#E5E5E5', height: '100vh', marginTop: '10px',
                    }}>
                        <div style={{ marginLeft: '20%', marginTop: '30px' }}>
                            <NavLink className="nav_list" activeClassName='text-primary' to='/admin'>
                                Volunteer register list
                            </NavLink> <br /><br />
                            <NavLink className="nav_list" activeClassName='text-primary' to='/addEvent'>
                                Add event
                            </NavLink>
                        </div>
                    </div>
                    <div style={{ width: '66%', float: 'left', background: '#ffffff', marginTop: '50px', marginLeft: '20px' }}>

                       <form action="onSubmit">
                       <div>
                            <input type="text" placeholder="Type Work Name"/><br/>
                            <br/>
                            <input type="file" /><br/>
                            <br/>
                            <button className='btn btn-success'>submit</button>
                        </div>
                       </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEvent;