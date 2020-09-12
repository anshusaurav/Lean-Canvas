import React, { Component, createRef } from 'react'
import ReactMarkdown from "react-markdown";
import marked from "marked";
import { htmlDecode } from './../utilities/FileReadUtilities'
marked.setOptions({
    breaks: true
});
const renderer = new marked.Renderer();
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
        console.log(virtualElem.querySelector('#problem + ul') || virtualElem.querySelector('#problem + ol'));
        this.setState({ problem: virtualElem.querySelector('#problem + ul') || virtualElem.querySelector('#problem + ol') });
        // this.problemRef.current.dangerouslySetInnerHTML = virtualElem.querySelector('#problem + ul') || virtualElem.querySelector('#problem + ol');
    }

    componentDidMount() {
        this.parseHTML();
    }

    render() {
        const { problem } = this.state;
        return (
            <div className='lean-canvas'>
                <div className="lean-canvas-container">
                    <div className='a box'>
                        <div className='box-content'>
                            <h2>Problem</h2>
                            {problem && problem.length > 0 &&
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(problem, { renderer: renderer })
                                    }}>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='b box'>
                        <div className='box-content'>
                            <h2>Solution</h2>
                            <div >

                            </div>
                        </div>
                    </div>
                    <div className='c box'>
                        <div className="box-content">
                            <h2>Key Matrics</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='d box'>
                        <div className="box-content">
                            <h2>Unique Value Proposition</h2>
                            <div >

                            </div>
                        </div>
                    </div>
                    <div className='e box'>
                        <div className="box-content">
                            <h2>Unfair Advantage</h2>
                            <div >

                            </div>
                        </div>
                    </div>
                    <div className='f box'>
                        <div className="box-content">
                            <h2>Channels</h2>
                            <div >

                            </div>
                        </div>
                    </div>
                    <div className='g box'>
                        <div className="box-content">
                            <h2>Customer Segments</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='h box'>
                        <div className="box-content">
                            <h2>Cost Structure</h2>
                            <div>

                            </div>
                        </div>
                    </div>

                    <div className='i box'>
                        <div className="box-content">
                            <h2>Revenue Streams</h2>
                            <div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='previewer'>
                    <ReactMarkdown source={this.props.markdown} />
                </div>
            </div >
        )
    }
}
export default CanvasContainer;