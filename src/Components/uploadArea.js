import React, { Component } from 'react'
import '.././scss/uploadArea.scss';
class UploadArea extends Component {
  constructor(props) {
    super(props)
    this.state = { shaded: false, cvs: 0,error: false }
    this.fileInputRef = React.createRef()
    this.openFileDialog = this.openFileDialog.bind(this)
    this.onFilesAdded = this.onFilesAdded.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  openFileDialog() {
    if (this.props.disabled) return
    this.fileInputRef.current.click()
  }
  handleUploads = (e) => {
    console.log(e);
  }
  onFilesAdded(evt) {
    console.log(evt.target.files.length);
    if(this.props.cvs+evt.target.files.length > this.props.maxCvs) {
      return this.setState({error: true})
    }else {
      this.setState({error: false})
    }
    this.props.handleCvs(this.props.cvs+evt.target.files.length)

    if (this.props.disabled) return
    const files = evt.target.files
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array)
    }
  }

  onDragOver(evt) {
    evt.preventDefault()

    if (this.props.disabled) return

    this.setState({ shaded: true })
  }

  onDragLeave() {
    this.setState({ shaded: false })
  }

  onDrop(event) {
    event.preventDefault()
    console.log(event.dataTransfer.files.length);
    if (this.props.disabled) return

    if(this.props.cvs+event.dataTransfer.files.length > this.props.maxCvs) {
      return this.setState({error: true})
    } else {
      this.setState({error: false})
    }
    this.props.handleCvs(this.props.cvs+event.dataTransfer.files.length)


    const files = event.dataTransfer.files
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array)
    }
    this.setState({ shaded: false })
  }

  fileListToArray(list) {
    const array = []
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i))
    }
    return array
  }

  render() {
    return (
      <div
        className={`UploadArea ${this.state.shaded ? 'Shaded' : ''} ${this.state.error ? 'error' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />

        Drop files here or click to upload
      </div>
    )
  }
}

export default UploadArea
