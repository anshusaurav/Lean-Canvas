import React from "react";
import Dropzone from "react-dropzone";
import { TextArea, Button, Segment, Grid, Form, Divider } from 'semantic-ui-react'

// for pdf files
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileNames: [],
            files: [],
            errorMsgFile: null
        }
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
                this.setState({
                    files: acceptedFiles.map(file =>
                        Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        })
                    ),
                    fileNames: acceptedFiles.map(file => file.name),
                    errorMsgFile: null
                });
            }
            else {
                this.setState({ errorMsgFile: 'Invalid File Format' })
            }

            // console.log(acceptedFiles[0].preview)
        }
        var blobPromise = new Promise((resolve, reject) => {
            const reader = new window.FileReader();
            reader.readAsDataURL(acceptedFiles[0]);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(base64data);
            };
        });
        blobPromise.then(value => {
            console.log(value);
        });
        // this.setState({ fileNames: acceptedFiles.map(file => file.name) });

    }
    componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
    }
    render() {
        const { errorMsgFile } = this.state;
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
                                        {this.state.fileNames.length > 0 && !errorMsgFile && <strong>File Selected:</strong>}
                                        <ul>
                                            {this.state.fileNames.map(fileName => (
                                                <li key={fileName}>{fileName}</li>
                                            ))}
                                        </ul>
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

export default FileUpload;
