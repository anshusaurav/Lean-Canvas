import React from 'react'
import { Icon } from 'semantic-ui-react'
export const ProblemCard = props => {
    return (
        <div className='a box'>
            <div className='box-content'>
                <h2>Problem</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.problem &&
                        props.leanCanvas.problem.list &&
                        props.leanCanvas.problem.list.map(elem => {
                            return <p>{elem.trim()}</p>
                        })
                    }
                </div>
                <div className='card-extra-container'>
                    <h3>Existing Alternatives</h3>
                    {
                        props.leanCanvas &&
                        props.leanCanvas.problem &&
                        props.leanCanvas.problem.existingAlternatives &&
                        props.leanCanvas.problem.existingAlternatives.map(elem => {
                            return <p>{elem.trim()}</p>
                        })
                    }
                </div>
                <Icon name='lock'
                    className="box-icon" />
                <div className='box-right-traingle'>
                </div>
            </div>
        </div>
    )
}