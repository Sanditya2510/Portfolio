import React from 'react'

import WorkDetail from './workDetail'

const WorkList = (props) => {
    const { workList } = props
    return (
        <div>
            {
                workList && workList.map(work => {
                    return (
                        <WorkDetail work={work} /> 
                    )
                })
            }
        </div>
    )
}

export default WorkList
