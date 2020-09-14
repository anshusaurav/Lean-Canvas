import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
class LogPopup extends Component {
    render() {
        const { leanCanvas, togglePopUp } = this.props;
        return (<div className="log-wrapper">
            <div className="log-wrapper-content">
                <Icon circular name='close' className="close-btn" onClick={togglePopUp} />
                {
                    !leanCanvas.errors.length && !leanCanvas.warnings.length &&
                    <p className="info">
                        Successfully parsed without error or warning.
                </p>
                }
                {
                    !leanCanvas.errors.length && leanCanvas.warnings.length &&
                    <p className="warn">
                        Parsed with warnings {leanCanvas.warnings.length} warnings.
                </p>

                }
                {
                    leanCanvas.errors.length.length && !leanCanvas.warnings.length &&
                    <p className="error">
                        Error while parsing. {leanCanvas.errors.length} errors.
                </p>

                }
                {
                    leanCanvas.errors.length && leanCanvas.warnings.length &&
                    <p className="error">
                        Error while parsing. {leanCanvas.errors.length} errors
                and {leanCanvas.warnings.length} warnings.
                </p>

                }
                {
                    leanCanvas.errors.length && <p className="error">{leanCanvas.errors.length} error/errors reported</p>
                }
                {
                    leanCanvas.errors && leanCanvas.errors.map(elem => <p className="error">{elem}</p>)
                }
                {
                    leanCanvas.warnings.length && <p className="warn">{leanCanvas.warnings.length} warning/warnings reported</p>
                }
                {
                    leanCanvas.warnings && leanCanvas.warnings.map(elem => <p className="warn">{elem}</p>)
                }
            </div>
        </div>)
    }
}
export default LogPopup
