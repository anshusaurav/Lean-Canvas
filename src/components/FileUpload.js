import React from "react";
import Dropzone from "react-dropzone";
import { TextArea, Button, Segment, Grid, Divider } from 'semantic-ui-react'
// import { checkFileAPI, readText } from '../utilities/FileReadUtilities'
// for pdf files
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            // markdown: "",
            errorMsgFile: null,
            isLoading: false,
            isSubmitable: false
        }
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
        this.checkValidMarkdown();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true });
        this.getLeanCanvas();


    }

    getLeanCanvas = () => {
        this.props.toggleInputProvided();
    }
    checkValidMarkdown = () => {
        const { markdown } = this.props;
        if (markdown.length <= 0) {
            this.setState({ isSubmitable: false })
        }
        else
            this.setState({ isSubmitable: true })
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
                        file: acceptedFiles[0],
                        isSubmitable: true,
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
    componentDidMount() {
        this.checkValidMarkdown();
    }
    render() {
        const { errorMsgFile, file, isSubmitable, isLoading } = this.state;
        const { markdown } = this.props;
        return (
            <div className="input-container">
                <div>
                    <div className="input-wrapper">
                        <Segment placeholder>
                            <Grid columns={2} style={{ width: 780, height: 460 }}>
                                <Grid.Column>
                                    <div className="toolbar">
                                        Editor
                                    </div>
                                    <TextArea
                                        fluid="true"
                                        icon='user'
                                        label='Enter markdown'
                                        placeholder='Markdown content here'
                                        style={{ resize: 'none', height: 380, minWidth: 360, marginBottom: 16 }}
                                        value={markdown}
                                        onChange={this.handleChange}
                                    />
                                </Grid.Column>

                                <Grid.Column >
                                    <Dropzone
                                        onDrop={this.handleDrop}
                                        multiple={false}
                                    >

                                        {({ getRootProps, getInputProps, isDragActive }) => (
                                            <div {...getRootProps({ className: "dropzone" })}>
                                                <input {...getInputProps()} />
                                                <span style={{ fontSize: 24 }}>{isDragActive ? "📂" : "📁"}</span>
                                                <p>Drag'n'drop markdown, or click to select file</p>
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
                                        {/* {
                                            
                                        } */}
                                    </Dropzone>
                                    <div>

                                        {
                                            errorMsgFile && <p className='file-error-msg'>{errorMsgFile}</p>
                                        }
                                    </div>

                                </Grid.Column>
                            </Grid>

                            <Divider vertical>Or</Divider>
                        </Segment>
                        <Button
                            attached='bottom'
                            content='Submit'
                            primary
                            positive
                            onClick={this.handleSubmit}
                            disabled={!isSubmitable}
                            loading={isLoading}
                        />
                    </div>

                </div>
            </div>

        );
    }
}

export default FileUpload;
