import React, { Component, createRef } from 'react'

import marked from "marked";
import { Icon, Button } from 'semantic-ui-react'

import { exportComponentAsPNG } from "react-component-export-image";
marked.setOptions({
    breaks: true
});
class CanvasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: null,
            solution: '',
            keyMetgitrics: '',
            unqiueValueProposition: '',
            unfairAdvantage: '',
            channels: '',
            customerSegments: '',
            costStructure: '',
            revenueStreams: '',
            canvasHeading: '',
        }
        this.problemRef = createRef();
        this.solutionRef = createRef();
        this.keyMetricsRef = createRef();
        this.unqiueValuePropositionRef = createRef();
        this.unfairAdvantageRef = createRef();
        this.channelsRef = createRef();
        this.customerSegmentsRef = createRef();
        this.costStructureRef = createRef();
        this.revenueStreamsRef = createRef();
        this.canvasHeadingRef = createRef();
        this.canvasWrapperRef = createRef();

    }
    parseHTML = () => {
        const virtualElem = document.createElement('div');
        virtualElem.innerHTML = marked(this.props.markdown);
        console.log(virtualElem.innerHTML);
        const elemHeading = virtualElem.querySelector('h1');
        this.canvasHeadingRef.current.innerHTML = elemHeading.innerHTML;

        const elemProblem = virtualElem.querySelector('#problem + *') ||
            virtualElem.querySelector('#problem + *');
        this.problemRef.current.innerHTML = elemProblem.innerHTML;

        const elemSolution = virtualElem.querySelector('#solution + *') ||
            virtualElem.querySelector('#solution + *');
        this.solutionRef.current.innerHTML = elemSolution.innerHTML;

        const elemKeyMetrics = virtualElem.querySelector('#key-metrics + *') ||
            virtualElem.querySelector('#key-metrics + *');
        this.keyMetricsRef.current.innerHTML = elemKeyMetrics.innerHTML;

        const elemUnqiueValueProposition = virtualElem.querySelector('#unique-value-proposition + *') ||
            virtualElem.querySelector('#unqiue-value-proposition + *');
        this.unqiueValuePropositionRef.current.innerHTML = elemUnqiueValueProposition.innerHTML;

        const elemUnfairAdvantage = virtualElem.querySelector('#unfair-advantage + *') ||
            virtualElem.querySelector('#unfair-advantage + *');
        this.unfairAdvantageRef.current.innerHTML = elemUnfairAdvantage.innerHTML;

        const elemChannels = virtualElem.querySelector('#channels + *') ||
            virtualElem.querySelector('#channels + *');
        this.channelsRef.current.innerHTML = elemChannels.innerHTML;

        const elemCustomerSegments = virtualElem.querySelector('#customer-segments + *') ||
            virtualElem.querySelector('#customer-segments + *');
        this.customerSegmentsRef.current.innerHTML = elemCustomerSegments.innerHTML;

        const elemCostStructure = virtualElem.querySelector('#cost-structure + *') ||
            virtualElem.querySelector('#cost-structure + *');
        this.costStructureRef.current.innerHTML = elemCostStructure.innerHTML;

        const elemRevenueStreams = virtualElem.querySelector('#revenue-streams + *') ||
            virtualElem.querySelector('#revenue-stream + *');
        this.revenueStreamsRef.current.innerHTML = elemRevenueStreams.innerHTML;
    }
    exportAsPng = () => {
        exportComponentAsPNG(this.canvasWrapperRef)
    }

    componentDidMount() {
        this.parseHTML();
    }

    render() {
        return (
            <div className='lean-canvas'>
                <div className="canvas-main">
                    <Button icon='save'
                        content='Export as PNG'
                        className="canvas-save-btn"
                        onClick={this.exportAsPng} />

                    <div className="canvas-wrapper" ref={this.canvasWrapperRef}>
                        <h1 ref={this.canvasHeadingRef}> </h1>

                        <div className="lean-canvas-container">
                            <div className='a box'>
                                <div className='box-content'>
                                    <h2>Problem</h2>
                                    <div className="box-card-container"
                                        ref={this.problemRef} >
                                    </div>
                                    <Icon name='lock'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='b box'>
                                <div className='box-content'>
                                    <h2>Solution</h2>
                                    <div className="box-card-container"
                                        ref={this.solutionRef}>
                                    </div>
                                    <Icon name='key'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='c box'>
                                <div className="box-content">
                                    <h2>Key Matrics</h2>
                                    <div className="box-card-container"
                                        ref={this.keyMetricsRef}>
                                    </div>
                                    <Icon name='chart bar'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='d box'>
                                <div className="box-content">
                                    <h2>Unique Value Proposition</h2>
                                    <div className="box-card-container"
                                        ref={this.unqiueValuePropositionRef}>
                                    </div>
                                    <Icon name='gift'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='e box'>
                                <div className="box-content">
                                    <h2>Unfair Advantage</h2>
                                    <div className="box-card-container"
                                        ref={this.unfairAdvantageRef}>
                                    </div>
                                    <Icon name='magic'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='f box'>
                                <div className="box-content">
                                    <h2>Channels</h2>
                                    <div className="box-card-container"
                                        ref={this.channelsRef}>
                                    </div>
                                    <Icon name='expand arrows alternate'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='g box'>
                                <div className="box-content">
                                    <h2>Customer Segments</h2>
                                    <div className="box-card-container"
                                        ref={this.customerSegmentsRef}>
                                    </div>
                                    <Icon name='users'
                                        className="box-icon" />
                                </div>
                            </div>
                            <div className='h box'>
                                <div className="box-content">
                                    <h2>Cost Structure</h2>
                                    <div className="box-card-container"
                                        ref={this.costStructureRef}>
                                    </div>
                                    <Icon name='tag'
                                        className="box-icon" />
                                </div>
                            </div>

                            <div className='i box'>
                                <div className="box-content">
                                    <h2>Revenue Streams</h2>
                                    <div className="box-card-container"
                                        ref={this.revenueStreamsRef}>
                                    </div>
                                    <Icon name='dollar sign'
                                        className="box-icon" />
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