import React from 'react'
import { Icon } from 'semantic-ui-react'
export const CustomerSegmentsCard = props => {
    return (
        <div className='g box'>
            <div className="box-content">
                <h2>Customer Segments</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.customerSegments &&
                        props.leanCanvas.customerSegments.list &&
                        props.leanCanvas.customerSegments.list.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <div className='card-extra-container'>
                    <h3>Early Adopters</h3>
                    {
                        props.leanCanvas &&
                        props.leanCanvas.customerSegments &&
                        props.leanCanvas.customerSegments.earlyAdopters &&
                        props.leanCanvas.customerSegments.earlyAdopters.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='users'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}