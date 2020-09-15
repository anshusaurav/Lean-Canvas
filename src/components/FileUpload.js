import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { TextArea, Button, Divider } from 'semantic-ui-react'

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            errorMsgFile: null,
            isLoading: false,
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

    getLeanCanvas = () => {
        this.props.toggleInputProvided();
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
        const { errorMsgFile, file, isLoading } = this.state;
        const { markdown } = this.props;
        return (
            <div className="input-container">
                <div>
                    <div className="input-wrapper">
                        <h1>Lean Canvas for Devs</h1>
                        <div className="input-segment">
                            <div className="input-md-area">
                                <div className="input-text-area">
                                    <div className="toolbar">
                                        Editor
                                    </div>
                                    <TextArea
                                        fluid="true"
                                        icon='user'
                                        placeholder='Enter markdown content here'
                                        value={markdown}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input-drag-drop">
                                    <Dropzone
                                        onDrop={this.handleDrop}
                                        multiple={false}
                                    >

                                        {({ getRootProps, getInputProps, isDragActive }) => (
                                            <div {...getRootProps({ className: "dropzone" })}>
                                                <input {...getInputProps()} />
                                                <span style={{ fontSize: 24 }}>
                                                    {isDragActive ? "📂" : "📁"}
                                                </span>
                                                <p>
                                                    Drag'n'drop markdown, or click to select file
                                                </p>
                                                {file && <div className="file-preview">
                                                    <div className="file-preview-img">

                                                    </div>
                                                    <div className="file-preview-details">
                                                        <div className="file-preview-details-size">
                                                            <span>
                                                                <strong>
                                                                    {file.size / 1000}
                                                                </strong>
                                                                     KB
                                                            </span>
                                                        </div>
                                                        <div className="file-preview-details-filename">
                                                            <span>
                                                                {file.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                }
                                            </div>
                                        )}
                                    </Dropzone>
                                    {
                                        errorMsgFile && (<p
                                            className='file-error-msg'>
                                            {errorMsgFile}
                                        </p>)
                                    }
                                    <a href="https://gist.githubusercontent.com/anshusaurav/5d51cef5ac03eee17317d3aac56f35a5/raw/0145281a7b5779d3e9ec396a9c84b19a30ece608/airbnb.md"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Sample markdown available here
                                    </a>
                                </div>
                            </div>
                            <Divider vertical>Or</Divider>
                        </div>
                        <Button
                            attached='bottom'
                            content='Submit'
                            large
                            primary
                            onClick={this.handleSubmit}
                            loading={isLoading}
                        />
                    </div>

                </div>
            </div>

        );
    }
}

export default FileUpload;
