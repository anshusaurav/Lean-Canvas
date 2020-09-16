import React, { Component, createRef } from 'react'
import marked from "marked";
import LogPopup from './LogPopup';
import ReportError from './ReportError'
import { Button } from 'semantic-ui-react'
import { exportComponentAsPNG } from "react-component-export-image";
import { process } from '../utilities/FileReadUtilities'
import { ProblemCard } from '../components/CanvasCards/ProblemCard'
import { SolutionCard } from '../components/CanvasCards/SolutionCard'
import { KeyMetricsCard } from '../components/CanvasCards/KeyMetricsCard'
import { UniqueValuePropositionCard } from '../components/CanvasCards/UniqueValuePropositionCard'
import { UnfairAdvantageCard } from '../components/CanvasCards/UnfairAdvantageCard'
import { ChannelsCard } from '../components/CanvasCards/ChannelsCard'
import { CustomerSegmentsCard } from '../components/CanvasCards/CustomerSegmentsCard'
import { CostStructureCard } from '../components/CanvasCards/CostStructureCard'
import { RevenueStreamCard } from '../components/CanvasCards/RevenueStreamCard'
import LeanCanvasContext from '../context/LeanCanvasContext'
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
        const jsonraw = marked.lexer(this.context.markdown);
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
                        <Button icon='step backward'
                            content='Back to Editor'
                            className="canvas-save-btn"
                            onClick={this.props.toggleInputProvided} />

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

CanvasContainer.contextType = LeanCanvasContext
export default CanvasContainer;