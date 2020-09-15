import React from 'react'
import { Icon } from 'semantic-ui-react'
export const RevenueStreamCard = props => {
    return (
        <div className='i box'>
            <div className="box-content">
                <h2>Revenue Streams</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.revenueStreams &&
                        props.leanCanvas.revenueStreams.list &&
                        props.leanCanvas.revenueStreams.list.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='dollar sign'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}