import React from 'react'

const Contact = () => {
    return (
        <div style={{minWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '5%', color: 'white'}}>
            <div style={{display: 'flex-start', justifyContent: 'flex-start', alignItems: 'center'}}>
                <a href="mailto: ssrivastava@me.iitr.ac.in">
                    <i className="fas fa-envelope fa-2x" style={{margin: "1em"}}></i>
                    ssrivastava@me.iitr.ac.in
                </a> 
            </div>
            <div style={{display: 'flex-start', justifyContent: 'flex-start', alignItems: 'center'}}>
                <a href="https://github.com/Sanditya2510">
                    <i className="fab fa-github-square fa-2x" style={{margin: "1em"}}></i>
                    github.com/Sanditya2510
                </a>
            </div>
            <div style={{display: 'flex-start', justifyContent: 'flex-start', alignItems: 'center'}}>
                <a href="https://www.linkedin.com/in/sanditya-srivastava-a7552b160/">
                    <i className="fab fa-linkedin fa-2x" style={{margin: "1em", backgroundColor: "none !important"}}></i>
                    linkedin.com/in/sanditya-srivastava-a7552b160
                </a> 
            </div>
        </div>
    )
}

export default Contact