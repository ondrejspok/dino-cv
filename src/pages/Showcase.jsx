import React from "react";

const Showcase = () => {
    return (
        <div>
            <button onClick={() => window.location.href = './'}>Go Back</button>
            <div className="showcase-container">
                <h1>Hey There!</h1>
            </div>
        </div>
    );
};

export default Showcase;