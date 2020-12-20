import React from 'react'

import { 
    MDBJumbotron, 
    MDBContainer, 
    MDBRow, 
    MDBCol 
} from "mdbreact";

import SkillsDetails from './skillsDetails'

const mapToDetails = obj => {
    return (
        obj.map( tech => {
            return (
                <SkillsDetails img={tech.img} width={tech.width} name={tech.name} marginLeft={tech.marginLeft} />
            )
        })
    )
}

const Skills = () => {
    const backend = [
        {img: 'django', width: '70%', name: 'Django', marginLeft: '0%'},
        {img: 'nodejs', width: '45%', name: 'NodeJs', marginLeft: '3%'},
    ]

    const frontend = [
        {img: 'react', width: '100%', name: 'ReactJs', marginLeft: '0%'},
        {img: 'redux', width: '95%', name: 'Redux', marginLeft: '3%'},
        {img: 'mobx', width: '90%', name: 'MobX', marginLeft: '0%'},
        {img: 'html', width: '89%', name: 'HTML', marginLeft: '3%'},
        {img: 'css', width: '87%', name: 'CSS', marginLeft: '3%'},
    ]

    const db = [
        {img: 'postgres', width: '50%', name: 'PostgreSQL', marginLeft: '0%'},
        {img: 'mongo', width: '53%', name: 'MongoDB', marginLeft: '0%'},
        {img: 'redis', width: '60%', name: 'Redis', marginLeft: '3%'},
    ]
    
    const lang = [
        {img: 'cpp', width: '48%', name: 'C++', marginLeft: '3%'},
        {img: 'py', width: '53%', name: 'Python', marginLeft: '3%'},
        {img: 'js', width: '53%', name: 'Javascript', marginLeft: '0%'},
    ]
    
    const others = [
        {img: 'circle', width: '80%', name: 'Circle CI', marginLeft: '0%'},
        {img: 'celery', width: '80%', name: 'Celery', marginLeft: '0%'},
    ]

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
                                    {
                                        mapToDetails(backend)
                                    }
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
                                    {
                                        mapToDetails(frontend)
                                    }
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
                                    {
                                        mapToDetails(db)
                                    }
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
                                    {
                                        mapToDetails(lang)
                                    }
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
                                    {
                                        mapToDetails(others)
                                    }
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