import React from 'react'
import { Icon } from 'semantic-ui-react'
export const UnfairAdvantageCard = props => {
    return (
        <div className='e box'>
            <div className="box-content">
                <h2>Unfair Advantage</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.unfairAdvantage &&
                        props.leanCanvas.unfairAdvantage.list &&
                        props.leanCanvas.unfairAdvantage.list.map((elem, index) => {
                            return <p key={index}><span>- </span>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='magic'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}