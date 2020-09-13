import React, { Component, createRef } from 'react'
import ReactMarkdown from "react-markdown";
import marked from "marked";
// import { htmlDecode } from './../utilities/FileReadUtilities'
marked.setOptions({
    breaks: true
});
// const renderer = new marked.Renderer();
class CanvasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: null,
            solution: '',
            keyMetrics: '',
            unqiueValueProposition: '',
            unfairAdvantage: '',
            channels: '',
            customerSegments: '',
            costStructure: '',
            revenueStreams: ''
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

    }
    parseHTML = () => {
        const virtualElem = document.createElement('div');
        virtualElem.innerHTML = marked(this.props.markdown);
        console.log(virtualElem.innerHTML);
        // console.log(virtualElem.querySelector('#problem + ul') || virtualElem.querySelector('#problem + ol'));
        const elemProblem = virtualElem.querySelector('#problem + *') || virtualElem.querySelector('#problem + *');
        this.problemRef.current.innerHTML = elemProblem.innerHTML;

        const elemSolution = virtualElem.querySelector('#solution + *') || virtualElem.querySelector('#solution + *');
        this.solutionRef.current.innerHTML = elemSolution.innerHTML;

        const elemKeyMetrics = virtualElem.querySelector('#key-metrics + *') || virtualElem.querySelector('#key-metrics + *');
        this.keyMetricsRef.current.innerHTML = elemKeyMetrics.innerHTML;

        const elemUnqiueValueProposition = virtualElem.querySelector('#unique-value-proposition + *') || virtualElem.querySelector('#unqiue-value-proposition + *');
        this.unqiueValuePropositionRef.current.innerHTML = elemUnqiueValueProposition.innerHTML;

        const elemUnfairAdvantage = virtualElem.querySelector('#unfair-advantage + *') || virtualElem.querySelector('#unfair-advantage + *');
        this.unfairAdvantageRef.current.innerHTML = elemUnfairAdvantage.innerHTML;

        const elemChannels = virtualElem.querySelector('#channels + *') || virtualElem.querySelector('#channels + *');
        this.channelsRef.current.innerHTML = elemChannels.innerHTML;

        const elemCustomerSegments = virtualElem.querySelector('#customer-segments + *') || virtualElem.querySelector('#customer-segments + *');
        this.customerSegmentsRef.current.innerHTML = elemCustomerSegments.innerHTML;

        const elemCostStructure = virtualElem.querySelector('#cost-structure + *') || virtualElem.querySelector('#cost-structure + *');
        this.costStructureRef.current.innerHTML = elemCostStructure.innerHTML;

        const elemRevenueStreams = virtualElem.querySelector('#revenue-stream + *') || virtualElem.querySelector('#revenue-stream + *');
        this.revenueStreamsRef.current.innerHTML = elemRevenueStreams.innerHTML;
    }

    componentDidMount() {
        this.parseHTML();
    }

    render() {
        // const { problem } = this.state;
        return (
            <div className='lean-canvas'>
                <div className='previewer'>
                    <ReactMarkdown source={this.props.markdown} />
                </div>
                <div className="lean-canvas-container">
                    <div className='a box'>
                        <div className='box-content'>
                            <h2>Problem</h2>
                            <div className="box-card-container" ref={this.problemRef} >
                            </div>

                        </div>
                    </div>
                    <div className='b box'>
                        <div className='box-content'>
                            <h2>Solution</h2>
                            <div className="box-card-container" ref={this.solutionRef}>

                            </div>
                        </div>
                    </div>
                    <div className='c box'>
                        <div className="box-content">
                            <h2>Key Matrics</h2>
                            <div className="box-card-container" ref={this.keyMetricsRef}>

                            </div>
                        </div>
                    </div>
                    <div className='d box'>
                        <div className="box-content">
                            <h2>Unique Value Proposition</h2>
                            <div className="box-card-container" ref={this.unqiueValuePropositionRef}>

                            </div>
                        </div>
                    </div>
                    <div className='e box'>
                        <div className="box-content">
                            <h2>Unfair Advantage</h2>
                            <div className="box-card-container" ref={this.unfairAdvantageRef}>

                            </div>
                        </div>
                    </div>
                    <div className='f box'>
                        <div className="box-content">
                            <h2>Channels</h2>
                            <div className="box-card-container" ref={this.channelsRef}>

                            </div>
                        </div>
                    </div>
                    <div className='g box'>
                        <div className="box-content">
                            <h2>Customer Segments</h2>
                            <div className="box-card-container" ref={this.customerSegmentsRef}>

                            </div>
                        </div>
                    </div>
                    <div className='h box'>
                        <div className="box-content">
                            <h2>Cost Structure</h2>
                            <div className="box-card-container" ref={this.costStructureRef}>

                            </div>
                        </div>
                    </div>

                    <div className='i box'>
                        <div className="box-content">
                            <h2>Revenue Streams</h2>
                            <div className="box-card-container" ref={this.revenueStreamsRef}>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default CanvasContainer;