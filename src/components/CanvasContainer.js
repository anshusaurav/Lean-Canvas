import React, { Component, createRef } from 'react'
import marked from "marked";
import { Icon, Button } from 'semantic-ui-react'
import { exportComponentAsPNG } from "react-component-export-image";
import { process } from './../utilities/FileReadUtilities'
import LogPopup from './LogPopup';
import ReportError from './ReportError'

class CanvasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leanCanvas: null,
            popUpVisible: false,
        }
        this.canvasWrapperRef = createRef();
    }
    parseMarkdown = () => {
        const jsonraw = marked.lexer(this.props.markdown);
        console.log(jsonraw);
        this.setState({ leanCanvas: process(jsonraw) })
    }
    exportAsPng = () => {
        exportComponentAsPNG(this.canvasWrapperRef, 'Lean Canvas')
    }
    togglePopUp = () => {
        this.setState({ popUpVisible: !this.state.popUpVisible })
    }
    componentDidMount() {
        this.parseMarkdown();
    }

    render() {
        const { leanCanvas, popUpVisible } = this.state;
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
                            onClick={this.togglePopUp} />
                    </div>
                    {popUpVisible && leanCanvas && (
                        <LogPopup leanCanvas={leanCanvas}
                            togglePopUp={this.togglePopUp} />)}
                    <div className="canvas-wrapper"
                        ref={this.canvasWrapperRef}>
                        <h1>{leanCanvas && leanCanvas.heading} </h1>
                        {
                            leanCanvas && leanCanvas.errors.length ? (
                                <ReportError />) : (
                                    <div className="lean-canvas-container">
                                        <ProblemCard leanCanvas={leanCanvas} />
                                        <SolutionCard leanCanvas={leanCanvas} />
                                        <KeyMetricsCard leanCanvas={leanCanvas} />
                                        <UniqueValuePropositionCard leanCanvas={leanCanvas} />
                                        <UnfairAdvantageCard leanCanvas={leanCanvas} />
                                        <ChannelsCard leanCanvas={leanCanvas} />
                                        <CustomerSegmentsCard leanCanvas={leanCanvas} />
                                        <CostStructureCard leanCanvas={leanCanvas} />
                                        <RevenueStreamCard leanCanvas={leanCanvas} />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const ProblemCard = props => {
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

const SolutionCard = props => {
    return (
        <div className='b box' >
            <div className='box-content'>
                <h2>Solution</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.problem &&
                        props.leanCanvas.solution.list &&
                        props.leanCanvas.solution.list.map(elem => {
                            return <p>{elem.trim()}</p>
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
const KeyMetricsCard = props => {
    return (
        <div className='c box'>
            <div className="box-content">
                <h2>Key Metrics</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.keyMetrics &&
                        props.leanCanvas.keyMetrics.list &&
                        props.leanCanvas.keyMetrics.list.map(elem => {
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
    )
}
const UniqueValuePropositionCard = props => {
    return (
        <div className='d box'>
            <div className="box-content">
                <h2>Unique Value Proposition</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.uniqueValueProposition &&
                        props.leanCanvas.uniqueValueProposition.list &&
                        props.leanCanvas.uniqueValueProposition.list.map(elem => {
                            return <p>{elem.trim()}</p>
                        })

                    }
                </div>
                <div className='card-extra-container'>
                    <h3>High Level Concept</h3>
                    {
                        props.leanCanvas &&
                        props.leanCanvas.uniqueValueProposition &&
                        props.leanCanvas.uniqueValueProposition.highLevelConcept &&
                        props.leanCanvas.uniqueValueProposition.highLevelConcept.map(elem => {
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
    )
}
const UnfairAdvantageCard = props => {
    return (
        <div className='e box'>
            <div className="box-content">
                <h2>Unfair Advantage</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.unfairAdvantage &&
                        props.leanCanvas.unfairAdvantage.list &&
                        props.leanCanvas.unfairAdvantage.list.map(elem => {
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
    )
}
const ChannelsCard = props => {
    return (
        <div className='f box'>
            <div className="box-content">
                <h2>Channels</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.channels &&
                        props.leanCanvas.channels.list &&
                        props.leanCanvas.channels.list.map(elem => {
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
    )
}
const CustomerSegmentsCard = props => {
    return (
        <div className='g box'>
            <div className="box-content">
                <h2>Customer Segments</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.customerSegments &&
                        props.leanCanvas.customerSegments.list &&
                        props.leanCanvas.customerSegments.list.map(elem => {
                            return <p>{elem.trim()}</p>
                        })

                    }
                </div>
                <div className='card-extra-container'>
                    <h3>Early Adopters</h3>
                    {
                        props.leanCanvas &&
                        props.leanCanvas.customerSegments &&
                        props.leanCanvas.customerSegments.earlyAdopters &&
                        props.leanCanvas.customerSegments.earlyAdopters.map(elem => {
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
    )
}
const CostStructureCard = props => {
    return (
        <div className='h box'>
            <div className="box-content">
                <h2>Cost Structure</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.costStructure &&
                        props.leanCanvas.costStructure.list &&
                        props.leanCanvas.costStructure.list.map(elem => {
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
    )
}
const RevenueStreamCard = props => {
    return (
        <div className='i box'>
            <div className="box-content">
                <h2>Revenue Streams</h2>
                <div className="box-card-container">
                    {
                        props.leanCanvas &&
                        props.leanCanvas.revenueStreams &&
                        props.leanCanvas.revenueStreams.list &&
                        props.leanCanvas.revenueStreams.list.map(elem => {
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
    )
}
export default CanvasContainer;