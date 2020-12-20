import React from 'react'

import { 
    MDBJumbotron, 
    MDBContainer, 
    MDBRow, 
    MDBCol 
} from "mdbreact";

import SkillsDetails from './skillsDetails'

const Skills = () => {
    return (
        <div className="h4-responsive">
            <MDBContainer className="mt-5 text-left">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                            <h2 style={{fontWeight:'600'}}>
                                Backend Technologies
                            </h2>
                            <hr className="my-2 white" />
                            <div className="container">
                                <div className="row">
                                    <SkillsDetails img='django' width='70%' name='Django' marginLeft='0%' />
                                    <SkillsDetails img='nodejs' width='45%' name='NodeJs' marginLeft='3%' />
                                </div>
                            </div>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="mt-5 text-left">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                            <h2 h2 style={{fontWeight:'600'}}>
                                Frontend Technologies
                            </h2>
                            <hr className="my-2 white" />
                            <div className="container">
                                <div className="row">
                                    <SkillsDetails img='react' width='100%' name='ReactJs' marginLeft='0%' />
                                    <SkillsDetails img='redux' width='95%' name='Redux' marginLeft='3%' />
                                    <SkillsDetails img='mobx' width='90%' name='MobX' marginLeft='0%' />
                                    <SkillsDetails img='html' width='89%' name='HTML' marginLeft='3%' />
                                    <SkillsDetails img='css' width='87%' name='CSS' marginLeft='3%' />
                                </div>
                            </div>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className="mt-5 text-left">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                            <h2 h2 style={{fontWeight:'600'}}>
                                Databases
                            </h2>
                            <hr className="my-2 white" />
                            <div className="container">
                                <div className="row">
                                    <SkillsDetails img='postgres' width='50%' name='PostgreSQL' marginLeft='0%' />
                                    <div className="col-md  " style={{textAlign: 'center'}}>
                                        <img src='img/mongo.png' style={{width: '53%', marginLeft: '0%'}} />
                                        <p style={{marginTop: '0%'}}>MongoDB</p>
                                    </div>
                                    <SkillsDetails img='redis' width='60%' name='Redis' marginLeft='3%' />
                                </div>
                            </div>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="mt-5 text-left">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                            <h2 h2 style={{fontWeight:'600'}}>
                                Languages
                            </h2>
                            <hr className="my-2 white" />
                            <div className="container">
                                <div className="row">
                                    <SkillsDetails img='cpp' width='48%' name='C++' marginLeft='3%' />
                                    <SkillsDetails img='py' width='53%' name='Python' marginLeft='3%' />
                                    <SkillsDetails img='js' width='53%' name='Javascript' marginLeft='0%' />
                                </div>
                            </div>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="mt-5 text-left">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{background: 'transparent', color: 'white'}}>
                            <h2 h2 style={{fontWeight:'600'}}>
                                Others
                            </h2>
                            <hr className="my-2 white" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md  " style={{textAlign: 'center'}}>
                                        <img src='img/docker.png' style={{width: '80%', marginLeft: '0%', marginBottom: '14%'}} />
                                        <p style={{marginTop: '0%'}}>Docker</p>
                                    </div>
                                    <SkillsDetails img='circle' width='80%' name='Circle CI' marginLeft='0%' />
                                    <SkillsDetails img='celery' width='80%' name='Celery' marginLeft='0%' />
                                </div>
                            </div>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </div>
    )
}

export default Skills