import React from 'react'

const ContactDetails = props => {
    const { href, children, icon } = props
    
    return (
        <div style={{display: 'flex-start', justifyContent: 'flex-start', alignItems: 'center'}}>
            <a href={href}>
                <i className={icon} style={{margin: "1em"}}></i>
                {children}
            </a> 
        </div>
    )
}

export default ContactDetails