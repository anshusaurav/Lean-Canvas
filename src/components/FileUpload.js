import React from "react";
import Dropzone from "react-dropzone";

// for pdf files
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileNames: [],
            errorMsgs: []
        }
    }
    handleDrop = (acceptedFiles) =>
        this.setState({ fileNames: acceptedFiles.map(file => file.name) });

    render() {
        return (
            <div className="file-upload" >
                <Dropzone
                    onDrop={this.handleDrop}

                >
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <p>Drag'n'drop images, or click to select files</p>
                        </div>
                    )}
                </Dropzone>
                <div>
                    {this.state.fileNames.length > 0 && <strong>Files:</strong>}
                    <ul>
                        {this.state.fileNames.map(fileName => (
                            <li key={fileName}>{fileName}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FileUpload;
