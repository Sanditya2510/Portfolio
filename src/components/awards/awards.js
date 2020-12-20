import React, { Component } from 'react'
import { connect } from 'react-redux'

import AwardsList from './awardsList'

class Awards extends Component{
    render(){
        const { awardsList } = this.props
        return (
            <div>
                <AwardsList awardsList={awardsList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        awardsList: state.awards.awardsList
    }
}

export default connect(mapStateToProps)(Awards)