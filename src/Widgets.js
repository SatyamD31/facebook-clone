import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="" 
                // width="340"
                width="100%" 
                height="100%" 
                style={{ border: "none", overflow: "hidden" }} 
                scrolling="no" 
                frameBorder="0" 
                allowTransparencey="true" 
                allow="encrypted-media"
            >
            </iframe>
        </div>
    );
}

export default Widgets
