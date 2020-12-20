import React from 'react'

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Hobbies = () => {
    return (
        <div className="container" style={{display:'flex', alignContent: 'center', flexWrap: 'wrap'}}>
            <MDBCol style={{padding: '0', marginBottom: '10%'}}>
                <MDBCard style={{ width: "25rem", height:"30rem", margin: '0px'}}>
                    <MDBCardImage className="img-fluid" src="img/chess.jpeg" waves style={{width: '100%'}}/>
                    <MDBCardBody>
                    <MDBCardTitle className="h2-responsive">Chess</MDBCardTitle>
                    <MDBCardText>
                        <ul className="h4-responsive">
                            <li>
                                2000 rated player on Lichess.
                            </li>
                            <li>
                                Won Gold medals at Inter University Chess tournaments
                            </li>
                            <li>
                                Big Fan of Bobby Fischer. 
                            </li>
                        </ul> 
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol style={{padding: '0'}}>
                <MDBCard style={{ width: "25rem", height:"30rem", margin: '0px !important'}}>
                    <MDBCardImage className="img-fluid" src="img/f1.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle className="h2-responsive">Formula 1</MDBCardTitle>
                    <MDBCardText>
                        <ul className="h4-responsive">
                            <li>
                                Ardent follower of George Russell. 
                            </li>
                            <li>
                                F1 League racer on PS4.
                            </li>
                        </ul>
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default Hobbies