import React from 'react'
import { Icon } from 'semantic-ui-react'
export const SolutionCard = props => {
    return (
        <div className='b box' >
            <div className='box-content'>
                <h2>Solution</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.problem &&
                        props.leanCanvas.solution.list &&
                        props.leanCanvas.solution.list.map((elem, index) => {
                            return <p key={index}><span>- </span>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='key'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div >
    )
}