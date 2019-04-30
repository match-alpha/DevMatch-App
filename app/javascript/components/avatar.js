import React from "react"
import PropTypes from "prop-types"
import ActiveStorageProvider from 'react-activestorage-provider'

class User extends React.Component {
  constructor(props){
    super(props)
    const{ user } = props
    this.state = {
      user
    }
  }


  handleSubmit = (user)=>{
    this.setState({ user })
  }

  render () {
    const{ user } = this.state
    return (
      <React.Fragment>
        
        { user && user.avatar_url &&
          <div>
            <h2>Your Avatar is: </h2>
            <img src={user.avatar_url} />
          </div>
        }
        <ActiveStorageProvider
          endpoint={{
            path: `/users/${user.id}`,
            model: 'User',
            attribute: 'avatar',
            method: 'PUT',
          }}
          onSubmit={this.handleSubmit}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />

              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })}
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default User
