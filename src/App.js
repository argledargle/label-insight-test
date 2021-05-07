import React, { Component } from 'react'
import './App.css'
import Image from './component/Image'
import ImgContext from './contexts/ImgContext'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      labelInsightImages: [], // Set initial state of images to empty array
      limit: 0, // Set initial limit to zero to begin at index 0 of array
      isOpen: false, // Set Modal clicked status to false and can update if closed or open
      isActive: '', // Set Modal to empty string
      userDescription: [] // Empty array that stores user's descriptions
    }
  }

  // ContextType to set use Error context.
  static contextType = ImgContext

  componentDidMount () {
    this.context.clearError() // Call context clearError

    // Fetch request to get photos
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(responseJson => {
        // Update state of Images array to include response
        this.setState({
          labelInsightImages: responseJson
        })
      })
  }

  // Button that handles the event of displaying a new set of 25 colors
  handleNewColorsButton = e => {
    e.preventDefault()
    this.setState({
      limit: this.state.limit + 25 // update state to add 25 to its limit
    })
  }

  handleDescription = e => {
    e.preventDefault()
    this.setState({
      userDescription: e.target.id
    })
  }

  render () {
    // destruct array
    const { labelInsightImages } = this.state

    // array prototype to display 25 colors and map through array
    let colorfulSquares = labelInsightImages
      .slice(this.state.limit, this.state.limit + 25)
      .map(images => <Image key={images.id} images={images} />)

    return (
      <div>
        <header>
          <h1>Paint Color Samples</h1>
        </header>
        <main>
          <div className='button-styling'>
            <button onClick={this.handleNewColorsButton}>New Colors</button>
          </div>
          <br />
          <br />
          <section className='grid'>{colorfulSquares}</section>
        </main>
      </div>
    )
  }
}

export default App
