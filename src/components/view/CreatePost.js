import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreatePost extends Component {
  constructor(){
    super()
    this.state = {
      post: {
        image: '',
        caption: ''
      }
    }
  }

  updatePost(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.post)
    updated[event.target.id] = event.target.value
    this.setState({
      post: updated
    })
  }

  submitPost(event){
    event.preventDefault()
    if(this.state.post.image.length == 0){
      alert('Please add a Image')
      return
    }
    if(this.state.post.caption.length == 0){
      alert('Please add text in the Caption')
      return
    }
    console.log('submitPost: ' + JSON.stringify(this.state.post))
    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  imageSelected(files){
    console.log('imageSelected: ')
    const image = files[0]

    const cloudName = 'drnd6t27i'
    const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'

    const timestamp = Date.now()/1000
    const uploadPreset = 'atdj9kfd'

    const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'MNEKQ2hAhV7gUCMSN-ZEnIuccSU'

    const signature = sha1(paramsStr)

    const params = {
      'api_key': '321232981645263',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
        'signature': signature
    }

    APIManager.uploadFile(url, image, params)
    .then((uploaded) => {
      console.log('Upload Completed: ' + JSON.stringify(uploaded))
      let updated = Object.assign({}, this.state.post)
      updated['image'] = uploaded['secure_url']
      this.setState({
        post: updated
      })

    })
    .catch((err) => {
      alert(err)

    })
  }


  render(){
    return (
      <div>
        <h2>Create Post</h2>
        <input id="caption" onChange={this.updatePost.bind(this)} className="form-control" type="text" placeholder="Caption"/><br/>

        <Dropzone onDrop={this.imageSelected.bind(this)} style={{border:'none'}}>
          <button className="btn btn-primary">Upload Image</button>
        </Dropzone><br/>
        <button onClick={this.submitPost.bind(this)} className="btn btn-success">Submit</button>
      </div>
    )
  }
}

export default CreatePost
