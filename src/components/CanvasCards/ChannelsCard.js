import React from 'react'
import { Icon } from 'semantic-ui-react'
export const ChannelsCard = props => {
    return (
        <div className='f box'>
            <div className="box-content">
                <h2>Channels</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.channels &&
                        props.leanCanvas.channels.list &&
                        props.leanCanvas.channels.list.map((elem, index) => {
                            return <p key={index}>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='expand arrows alternate'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}