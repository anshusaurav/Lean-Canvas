import React from "react";
import Dropzone from "react-dropzone";
export const FileDropZone = (props) => {
    return (
        <Dropzone
            onDrop={props.handleDrop}
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
                    {props.file && <div className="file-preview">
                        <div className="file-preview-img">

                        </div>
                        <div className="file-preview-details">
                            <div className="file-preview-details-size">
                                <span>
                                    <strong>
                                        {props.file.size / 1000}
                                    </strong>
                                    KB
                                </span>
                            </div>
                            <div className="file-preview-details-filename">
                                <span>
                                    {props.file.name}
                                </span>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            )}
        </Dropzone>
    )
}