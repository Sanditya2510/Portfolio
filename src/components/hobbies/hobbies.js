import React from 'react'
import { connect } from 'react-redux'

import HobbiesDetail from './hobbiesDetail'

const Hobbies = props => {
    const { hobbiesList } = props
    return (
        <div className="container" style={{display:'flex', alignContent: 'center', flexWrap: 'wrap'}}>
            {
                hobbiesList && hobbiesList.map( hobby => {
                    return (
                        <HobbiesDetail src={ hobby.src } name={ hobby.name } description={ hobby.description } /> 
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        hobbiesList: state.hobbies.hobbiesList
    }
}

export default connect(mapStateToProps)(Hobbies)
