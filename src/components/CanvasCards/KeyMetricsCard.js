import React from 'react'
import { Icon } from 'semantic-ui-react'
export const KeyMetricsCard = props => {
    return (
        <div className='c box'>
            <div className="box-content">
                <h2>Key Metrics</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.keyMetrics &&
                        props.leanCanvas.keyMetrics.list &&
                        props.leanCanvas.keyMetrics.list.map((elem, index) => {
                            return <p key={index}><span>- </span>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='chart bar'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}