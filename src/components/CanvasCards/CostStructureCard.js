import React from 'react'
import { Icon } from 'semantic-ui-react'
export const CostStructureCard = props => {
    return (
        <div className='h box'>
            <div className="box-content">
                <h2>Cost Structure</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.costStructure &&
                        props.leanCanvas.costStructure.list &&
                        props.leanCanvas.costStructure.list.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='tag'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}