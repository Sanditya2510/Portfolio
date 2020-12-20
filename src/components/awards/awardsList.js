import React from 'react'
import AwardsDetail from './awardsDetail'

const AwardsList = (props) => {
    const { awardsList } = props
    return (
        <div>
            {
                awardsList && awardsList.map(award => {
                    return (
                        <AwardsDetail award={award} /> 
                    )
                })
            }
        </div>
    )
}

export default AwardsList
