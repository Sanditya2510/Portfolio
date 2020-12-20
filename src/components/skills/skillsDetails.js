import React from 'react'

const SkillsDetails = (props) => {
    const { img, width, name, marginLeft } = props 
    return (
        <div className="col-md" style={{textAlign: 'center', position: 'relative'}}>
            <img src={`img/${img}.png`} style={{width: width, marginLeft: marginLeft}} />
            <p>{ name }</p>
        </div>
    )
}

export default SkillsDetails