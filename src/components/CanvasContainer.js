import React, { Component, createRef } from 'react'
import marked from "marked";
import { Icon, Button } from 'semantic-ui-react'
import { exportComponentAsJPEG } from "react-component-export-image";
import { process } from './../utilities/FileReadUtilities'
// marked.setOptions({
//     breaks: true
// });
class CanvasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leanCanvas: null
        }
        this.canvasWrapperRef = createRef();
    }
    parseMarkdown = () => {
        const jsonraw = marked.lexer(this.props.markdown);
        console.log(jsonraw);
        this.setState({ leanCanvas: process(jsonraw) })
    }
    exportAsPng = () => {
        exportComponentAsJPEG(this.canvasWrapperRef)
    }

    componentDidMount() {
        this.parseMarkdown();
    }

    render() {
        const { leanCanvas } = this.state;
        return (
            <div className='lean-canvas'>
                <div className="canvas-main">
                    <div className="canvas-control">
                        <Button icon='save'
                            content='Export as PNG'
                            className="canvas-save-btn"
                            primary
                            onClick={this.exportAsPng} />
                        <Button icon='bug'
                            content='View Log'
                            className="canvas-save-btn"
                            secondary
                            onClick={this.exportAsPng} />
                    </div>
                    <div className="canvas-wrapper"
                        ref={this.canvasWrapperRef}>
                        <h1>{leanCanvas && leanCanvas.heading} </h1>

                        <div className="lean-canvas-container">
                            <div className='a box'>
                                <div className='box-content'>
                                    <h2>Problem</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.problem &&
                                            leanCanvas.problem.list &&
                                            leanCanvas.problem.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <div className='card-extra-container'>
                                        <h3>Existing Alternatives</h3>
                                        {
                                            leanCanvas &&
                                            leanCanvas.problem &&
                                            leanCanvas.problem.existingAlternatives &&
                                            leanCanvas.problem.existingAlternatives.map(elem => {
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
                            <div className='b box'>
                                <div className='box-content'>
                                    <h2>Solution</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.problem &&
                                            leanCanvas.solution.list &&
                                            leanCanvas.solution.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='key'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                            <div className='c box'>
                                <div className="box-content">
                                    <h2>Key Metrics</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.keyMetrics &&
                                            leanCanvas.keyMetrics.list &&
                                            leanCanvas.keyMetrics.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='chart bar'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                            <div className='d box'>
                                <div className="box-content">
                                    <h2>Unique Value Proposition</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.uniqueValueProposition &&
                                            leanCanvas.uniqueValueProposition.list &&
                                            leanCanvas.uniqueValueProposition.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <div className='card-extra-container'>
                                        <h3>High Level Concept</h3>
                                        {
                                            leanCanvas &&
                                            leanCanvas.uniqueValueProposition &&
                                            leanCanvas.uniqueValueProposition.highLevelConcept &&
                                            leanCanvas.uniqueValueProposition.highLevelConcept.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='gift'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                            <div className='e box'>
                                <div className="box-content">
                                    <h2>Unfair Advantage</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.unfairAdvantage &&
                                            leanCanvas.unfairAdvantage.list &&
                                            leanCanvas.unfairAdvantage.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='magic'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                            <div className='f box'>
                                <div className="box-content">
                                    <h2>Channels</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.channels &&
                                            leanCanvas.channels.list &&
                                            leanCanvas.channels.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='expand arrows alternate'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                            <div className='g box'>
                                <div className="box-content">
                                    <h2>Customer Segments</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.customerSegments &&
                                            leanCanvas.customerSegments.list &&
                                            leanCanvas.customerSegments.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <div className='card-extra-container'>
                                        <h3>Early Adopters</h3>
                                        {
                                            leanCanvas &&
                                            leanCanvas.customerSegments &&
                                            leanCanvas.customerSegments.earlyAdopters &&
                                            leanCanvas.customerSegments.earlyAdopters.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='users'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                            <div className='h box'>
                                <div className="box-content">
                                    <h2>Cost Structure</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.costStructure &&
                                            leanCanvas.costStructure.list &&
                                            leanCanvas.costStructure.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='tag'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>

                            <div className='i box'>
                                <div className="box-content">
                                    <h2>Revenue Streams</h2>
                                    <div className="box-card-container">
                                        {
                                            leanCanvas &&
                                            leanCanvas.revenueStreams &&
                                            leanCanvas.revenueStreams.list &&
                                            leanCanvas.revenueStreams.list.map(elem => {
                                                return <p>{elem.trim()}</p>
                                            })

                                        }
                                    </div>
                                    <Icon name='dollar sign'
                                        className="box-icon" />
                                    <div className='box-right-traingle'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CanvasContainer;