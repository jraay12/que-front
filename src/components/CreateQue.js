import React, { useState } from 'react';
import './styles.css';

const CreateQue = () => {
    const [student_num, setNumber] = useState('');
    const [student_name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [purpose, setPurpose] = useState('');
    const [guest_name, setgName] = useState('');
    const [guest_email, setgEmail] = useState('');
    const [guest_purpose, setgPurpose] = useState('');
    const [showContainer1, setShowContainer1] = useState(true);
    const [showContainer2, setShowContainer2] = useState(false);
    const [showContainer3, setShowContainer3] = useState(false);
    const [showContainer4, setShowContainer4] = useState(false);

    const openContainer2 = () => {
        setShowContainer1(false);
        setShowContainer2(true);
        setShowContainer3(false);
        setShowContainer4(false);
    };

    const openContainer1 = () => {
        setShowContainer2(false);
        setShowContainer1(true);
        setShowContainer3(false);
        setShowContainer4(false);
    };

    const openContainer3 = () => {
        setShowContainer1(false);
        setShowContainer3(true);
        setShowContainer2(false);
        setShowContainer4(false);
    };

    const openContainer4 = () => {
        setShowContainer2(false);
        setShowContainer3(false);
        setShowContainer4(true);
        setShowContainer1(false);
    };



    const handleSubmit = () => {
        e.preventDefault();
        // Perform form submission logic here, such as adding the queue to a list of queues
        // Reset the form fields
        setNumber('');
        setName('');
        setEmail('');
        setPurpose('');

    };

    const labelStyle = {
        fontSize: 15,
        fontWeight: 'bold',
        display: 'flex',
        marginLeft: 80
    };

    const inputStyle = {
        borderRadius: 15,
        marginBottom: 10,
        width: 300,
        height: 50,
        alignItems: 'center',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'yellow' 
    };

    const purposeStyle = {
        borderRadius: 15,
        marginBottom: 10,
        width: 300,
        height: 100,
        alignItems: 'center',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'yellow'
    };




    return (
        <div classname="fullscreen-container">
            {showContainer1 && (
                <div className="notify">
                    <h1>Add Queue</h1>
                        <h3> I'm a ______ . </h3>
                        <button className="buttonStyle" onClick={openContainer2}>Student</button>
                        <button className="buttonStyle" onClick={openContainer3}>Guest</button>
                </div>
            )}

            {showContainer2 && (
                <div className="container">
                    <form onSubmit={handleSubmit}> 
                    <h1>Student Queue</h1>
                        <label style={labelStyle}> Student Number: </label>
                        <input type="number" value={student_num} placeholder="Enter your student number" onChange={(e) => setNumber(e.target.value)} style={inputStyle} required/>
                        <label style={labelStyle}> Student Name: </label>
                        <input type="text" value={student_name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} style={inputStyle} required/>
                        <label style={labelStyle}> Student Email: </label>
                        <input type="text" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} style={inputStyle} required/>
                        <label style={labelStyle}> Purpose: </label>
                        <input type="text" value={purpose} placeholder="State your purpose" onChange={(e) => setPurpose(e.target.value)} style={purposeStyle} required/>
                    
                        <button type="submit" className="custom-button" onClick={openContainer4}>Submit</button>
                        <button className="custom-button" onClick={openContainer1}>Cancel</button>
                    </form>
                </div>
            )}

            {showContainer3 && (
                <div className="container1">
                    <form onSubmit={handleSubmit}> 
                    <h1>Guest Queue</h1>
                        <label style={labelStyle}> Guest Name: </label>
                        <input type="text" value={guest_name} placeholder="Enter your name" onChange={(e) => setgName(e.target.value)} style={inputStyle} required/>
                        <label style={labelStyle}> Guest Email: </label>
                        <input type="text" value={guest_email} placeholder="Enter your email" onChange={(e) => setgEmail(e.target.value)} style={inputStyle} required/>
                        <label style={labelStyle}> Purpose: </label>
                        <input type="text" value={guest_purpose} placeholder="State your purpose" onChange={(e) => setgPurpose(e.target.value)} style={purposeStyle} required/>
                    
                        <button type="submit" className="custom-button" onClick={openContainer4}>Submit</button>
                        <button className="custom-button" onClick={openContainer1}>Cancel</button>
                    </form>
                </div>
            )}

            {showContainer4 && (
                <div className="notify1">
                    <h1> Queue Submitted !</h1>
                    <button className="buttonStyle" onClick={openContainer1}>Okay</button>
                </div>
            )}
        </div> 
    );
}

export default CreateQue;
