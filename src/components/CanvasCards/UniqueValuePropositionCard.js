import React from 'react'
import { Icon } from 'semantic-ui-react'
export const UniqueValuePropositionCard = props => {
    return (
        <div className='d box'>
            <div className="box-content">
                <h2>Unique Value Proposition</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.uniqueValueProposition &&
                        props.leanCanvas.uniqueValueProposition.list &&
                        props.leanCanvas.uniqueValueProposition.list.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <div className='card-extra-container'>
                    <h3>High Level Concept</h3>
                    {
                        props.leanCanvas &&
                        props.leanCanvas.uniqueValueProposition &&
                        props.leanCanvas.uniqueValueProposition.highLevelConcept &&
                        props.leanCanvas.uniqueValueProposition.highLevelConcept.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='gift'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}