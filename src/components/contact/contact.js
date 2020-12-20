import React from 'react'

import ContactDetails from './contactDetails'

const Contact = () => {
    const contactList = [
        {href: 'mailto: ssrivastava@me.iitr.ac.in', icon: 'fas fa-envelope fa-2x', contact: 'ssrivastava@me.iitr.ac.in'},
        {href: 'https://github.com/Sanditya2510', icon: 'fab fa-github-square fa-2x', contact: 'github.com/Sanditya2510'},
        {href: 'https://www.linkedin.com/in/sanditya-srivastava-a7552b160/', icon: 'fab fa-linkedin fa-2x', contact: 'linkedin.com/in/sanditya-srivastava-a7552b160'},
    ]

    return (
        <div style={{minWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '5%', color: 'white'}}>
            {
                contactList.map( contact => {
                   return (
                        <ContactDetails href={contact.href} icon={contact.icon}>
                            {contact.contact}
                        </ContactDetails>        
                   )
                })
            }
        </div>
    )
}

export default Contact