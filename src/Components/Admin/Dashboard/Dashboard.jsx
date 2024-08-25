import React, { useState } from "react";
import './Dashboard.css'

const Dashboard = () => {
    const [generateLink, setGenerateLink] = useState('');
    const [imgId, setimgId] = useState('');

    const handleSubmit = async () => {
        try {
            // Replace this with your actual API call
            const response = await fetch('http://localhost:1433/api/generateBanner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imgId: imgId }), // Assuming you want to send the input value to the API
            });
            const data = await response.json();
            console.log("dataaaa", data)
            if (response.ok) {
                // Assuming the response contains a field called "url" with the generated link
                setGenerateLink(data.url);
            } else {
                // Handle errors if any
                console.error("Error generating URL:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="main-container">
            <div className="hero-dashboard">
            <div className="admin-form">
                <input
                    id="email"
                    className="input"
                    type="email"
                    value={imgId}
                    onChange={(e) => setimgId(e.target.value)}
                    required
                />
                <button className="img-generate-btn" onClick={handleSubmit}>Generate Url</button>
            </div>
            {generateLink && (
                <div>
                    <input
                        type="text"
                        className="input"
                        value={generateLink}
                        readOnly
                        onFocus={(e) => e.target.select()} 
                    />
                </div>
            )}
            </div>
        </div>
    );
}

export default Dashboard