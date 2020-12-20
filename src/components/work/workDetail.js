import React from 'react'

import { 
    MDBJumbotron, 
    MDBContainer, 
    MDBRow, 
    MDBCol 
} from "mdbreact";

import WorkDescription from './workDescription'

const WorkDetail = (props) => {
    const { work } = props
    return(
        <MDBContainer className="mt-5 text-left">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                        <p className="lead">
                            <span className="display-4" style={{fontWeight: '600'}}>{work.company}</span>
                            <img src={"img/" + work.img +".png" } style={{width: work.sz, float: 'right'}} />
                        </p>
                        <p>
                            <span className="h4">{work.position}</span>  
                        </p>
                        <hr className="my-2 white" />
                        <ul className="h4-responsive">
                            {
                                work.description && work.description.map((desc) => {
                                    return <WorkDescription desc={ desc }/>
                                })
                            }
                        </ul>
                        <footer className="text-right h5-responsive">
                            {work.startDate} - {work.endDate}
                        </footer>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default WorkDetail