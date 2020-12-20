import React from 'react'

const About = () => {
    return (
        <div style={{height: '100%', minHeight: '100%', marginTop: '5%', color: 'white'}}>
            <figure className="d-flex align-items-center justify-content-center">
                <blockquote className="blockquote" style={{borderLeftColor: '#6200ea'}}>
                    <h1 style={{fontWeight: '600'}}>Competitive Programmer with interest and experience in Software Development.</h1>
                </blockquote>
            </figure>
            <p className="d-flex align-items-center justify-content-center h2-responsive">
                A Graduate from Indian Institute Of Technology Roorkee (IIT R), 
                with expertise and experience in full <br/> stack development.
                Possessing an insatiable appetite for innovation, escalation and development.<br/> 
                Certified High IQ by International High IQ Society. 
                A thorough professional with a natural flair for coding. <br/> 
                A self-motivated quick learner, possessing with a passion for self-improvement.
            </p>
        </div>
    )
}

export default About