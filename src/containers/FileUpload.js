import React, { Component } from "react";
import { FileDropZone } from "./../components/Input/FileDropzone"
import { TextArea, Button, Divider, Checkbox } from 'semantic-ui-react'
import Markdown from "react-markdown";
import LeanCanvasContext from '../context/LeanCanvasContext'

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            errorMsgFile: null,
            isLoading: false,
            editorMode: true,
        }
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true });
        this.getLeanCanvas();
    }

    toggleEditorMode = (event) => {
        this.setState({ editorMode: !this.state.editorMode });
    }
    getLeanCanvas = () => {
        this.context.toggleInputProvided();
    }

    handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length > 1) {
            this.setState({ errorMsgFile: 'Please select one file' })
        }
        else {
            let validFile = true;
            acceptedFiles.forEach(file => {
                if (file.name.endsWith('.md') || file.name.endsWith('.MD')) {

                }
                else {
                    validFile = false;
                }
            })
            if (validFile) {
                let file = acceptedFiles[0];
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.setState({

                        errorMsgFile: null,
                        file: acceptedFiles[0]
                    });
                    this.props.onChange(reader.result);
                }

                reader.readAsText(file);
            }
            else {
                this.setState({ errorMsgFile: 'Invalid File Format' })
            }
        }
    }
    render() {
        const { errorMsgFile, file, isLoading, editorMode } = this.state;
        const { markdown } = this.context;
        return (
            <div className="input-container">
                <div className="input-wrapper">
                    <h1>Lean Canvas for Devs</h1>
                    <div className="input-segment">
                        <div className="input-md-area">
                            <div className="input-text-area">
                                <div className="editor-toggle-section">
                                    <Checkbox toggle className="toggle-editor-btn" onClick={this.toggleEditorMode} />
                                </div>

                                {
                                    editorMode ? (
                                        <React.Fragment>
                                            <div className="toolbar">
                                                Editor
                                            </div>
                                            <TextArea
                                                fluid="true"
                                                icon='user'
                                                placeholder='Enter markdown content here'
                                                value={markdown}
                                                onChange={this.handleChange} />
                                        </React.Fragment>

                                    ) : (
                                            <React.Fragment>
                                                <div className="toolbar">
                                                    Preview
                                                </div>
                                                <div className="preview">
                                                    <Markdown source={markdown} />
                                                </div>

                                            </React.Fragment>
                                        )
                                }
                            </div>
                            <div className="input-drag-drop">
                                <FileDropZone
                                    handleDrop={this.handleDrop}
                                    file={file} />
                                <a href="https://gist.githubusercontent.com/anshusaurav/5d51cef5ac03eee17317d3aac56f35a5/raw/0145281a7b5779d3e9ec396a9c84b19a30ece608/airbnb.md"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Sample markdown available here
                                </a>
                                {
                                    errorMsgFile && (<p className='file-error-msg'>
                                        {errorMsgFile}
                                    </p>)
                                }
                            </div>
                        </div>
                        <Divider vertical>Or</Divider>
                    </div>
                    <Button
                        attached='bottom'
                        content='Generate Canvas'
                        size="large"
                        circular
                        primary
                        onClick={this.handleSubmit}
                        loading={isLoading}
                    />
                </div >
            </div >

        );
    }
}

FileUpload.contextType = LeanCanvasContext

export default FileUpload;
