import React from 'react'

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import WorkDescription from '../work/workDescription'

const HobbiesDetail = props => {
    const { src, name, description } = props
    return (
        <MDBCol style={{padding: '0', marginBottom: '10%'}}>
            <MDBCard style={{ width: "25rem", height:"30rem", margin: '0px'}}>
                <MDBCardImage className="img-fluid" src={`img/${src}`} waves style={{width: '100%'}}/>
                <MDBCardBody>
    <MDBCardTitle className="h2-responsive ">{ name }</MDBCardTitle>
                <MDBCardText>
                    <ul className="h4-responsive">
                        {
                            description && description.map( desc => {
                                return (
                                    <WorkDescription desc={ desc } />
                                )
                            })
                        }
                    </ul> 
                </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default HobbiesDetail