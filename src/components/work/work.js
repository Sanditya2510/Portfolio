import React, { Component } from 'react'
import { connect } from 'react-redux'

import WorkList from './workList'

class Work extends Component{
    render(){
        const { workList } = this.props
        return (
            <div>
                <WorkList workList={workList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        workList: state.workExp.workList
    }
}

export default connect(mapStateToProps)(Work)