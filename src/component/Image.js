import React from 'react'

class Image extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      props
    }
  }

  handleModal = e => {
    e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    const { images } = this.props
    console.log('this.state', this.state)
    return (
      <div onClick={this.handleModal}>
        <img
          className='grid-item'
          src={images.thumbnailUrl}
          alt='Brightly colored squares'
        />

        {/* The Modal */}
        <div
          className='modal-wrapper'
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <div className='modal-header'>
            <p>Square Color Information</p>
            <span onClick={this.handleModal} className='close-modal-button'>
              x
            </span>
          </div>
          <div className='modal-content'>
            <div className='modal-body'>
              <h4>{images.title}</h4>
              <img
                key={images.id}
                src={images.url}
                alt='Brightly colored square'
              />
            </div>
            <div className='modal-footer'>
              <button onClick={this.handleModal} className='button-cancel'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Image
