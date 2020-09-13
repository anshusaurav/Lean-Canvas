import React, { Component } from 'react';
import FileUpload from './components/FileUpload'
import CanvasContainer from './components/CanvasContainer'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            isInputProvided: false,
        }
    }
    onChange = (md) => {
        this.setState({ markdown: md })
    }
    toggleInputProvided = () => {
        this.setState({ isInputProvided: !this.state.isInputProvided })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isInputProvided !== prevState.isInputProvided) {

        }

    }
    render() {
        const { markdown, isInputProvided } = this.state;
        return (
            <>
                {
                    isInputProvided ? (<CanvasContainer markdown={markdown} />
                    ) : (<FileUpload markdown={markdown} onChange={this.onChange} toggleInputProvided={this.toggleInputProvided} />)
                }
            </>
        );
    }
}
export default Main


