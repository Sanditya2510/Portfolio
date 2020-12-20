import React from 'react'
import { 
    MDBJumbotron, 
    MDBContainer, 
    MDBRow, 
    MDBCol 
} from "mdbreact";

const Education = () => {
    return (
        <MDBContainer className="mt-5 text-left">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron  style={{background: 'transparent', color: 'white'}}>
                        <h1 className="lead display-4" style={{fontWeight:'600'}}>
                            Indian Institute Of Technology Roorkee
                        </h1>
                        <h2 className="display-5">
                            Bachelor Of Technology
                        </h2>
                        <h2 className="display-9">
                            Mechanical Department (Production and Industrial Engineering)
                        </h2>
                        <footer className="text-right">
                            <h3>2017-2021</h3>
                        </footer>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Education