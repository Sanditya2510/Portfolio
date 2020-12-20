import React from 'react'

import { 
    MDBJumbotron, 
    MDBContainer, 
    MDBRow, 
    MDBCol 
} from "mdbreact";

const AwardsDetail = (props) => {
    const { award } = props 
    return(
        <MDBContainer className="mt-5 text-left">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                        <p className="lead diplay-2">
                            <span className="display-4" style={{fontWeight: '600'}}>{award.name}</span>
                            <img src={"img/" + award.img +".png" } style={{width: `${award.sz}`, float: 'right'}} />
                        </p>
                        <hr className="my-5 white" />
                        <p>
                            <span className="h3">Domain - {award.field}</span>
                        </p>
                        <p>
                            <span className="h4">{award.description}</span>
                        </p>
                        <footer className="text-right h5-responsive">
                            {award.year}
                        </footer>   
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default AwardsDetail