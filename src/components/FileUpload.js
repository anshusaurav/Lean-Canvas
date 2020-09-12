import React from "react";
import Dropzone from "react-dropzone";
import { withRouter } from 'react-router-dom'
import { TextArea, Button, Segment, Grid, Divider } from 'semantic-ui-react'
// import { checkFileAPI, readText } from '../utilities/FileReadUtilities'
// for pdf files
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            markdown: "",
            errorMsgFile: null,
            isLoading: false,
        }
    }

    handleDrop = (acceptedFiles) => {
        // console.log(acceptedFiles);
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
                        markdown: reader.result,
                        errorMsgFile: null,
                        file: acceptedFiles[0]
                    });
                }

                reader.readAsText(file);
            }
            else {
                this.setState({ errorMsgFile: 'Invalid File Format' })
            }
        }
    }

    render() {
        const { errorMsgFile, file } = this.state;
        return (
            <div className="input-container">
                <div>
                    <div>
                        <Segment placeholder>
                            <Grid columns={2} style={{ width: 780, height: 460 }}>
                                <Grid.Column>

                                    <TextArea
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        label='Enter markdown'
                                        placeholder='Markdown content here'
                                        style={{ resize: 'none', height: 380, minWidth: 330, marginBottom: 16 }}
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
                                            </div>
                                        )}
                                    </Dropzone>
                                    <div>
                                        {file && !errorMsgFile && <strong>File Selected:</strong>}
                                        {file &&
                                            <ul>
                                                <li key={file.name}>{file.name}</li>
                                            </ul>
                                        }
                                        {
                                            errorMsgFile && <p className='file-error-msg'>{errorMsgFile}</p>
                                        }
                                    </div>

                                </Grid.Column>
                            </Grid>

                            <Divider vertical>Or</Divider>
                        </Segment>
                    </div>
                    <Button attached='bottom' content='Submit' primary positive />
                </div>
            </div>

        );
    }
}

export default withRouter(FileUpload);
