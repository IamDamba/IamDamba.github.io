import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

function NotFound() {
    return (
        <Router>
            <div>
                <h1>Page Not Found</h1>
            </div>        
            
            <Redirect to="/404"/>
        </Router>
    )
}

export default NotFound
