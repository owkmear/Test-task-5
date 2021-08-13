import React from 'react'
import { imageStartRequest } from '../../store/actions/images'
import { connect } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { lastPictureSelector } from '../../selectors'

class Main extends React.Component {
  componentDidMount() {
    const { firstLoad } = this.props
    !firstLoad && this.props.imageStartRequest()
  }
  render() {
    const { imageStartRequest, isLoading, errorMessage, picture } = this.props

    return (
      <div className="home">
        <div className="container">
          <div className="home__wrap">
            <button className="home__button button" onClick={imageStartRequest} disabled={isLoading ? 'disabled' : null}>
              {isLoading ? 'Loading...' : 'Load image'}
            </button>
            <div className="home__image">
              {!errorMessage ? isLoading ? <BeatLoader color={'#000000'} /> : <img src={picture.image_url} alt={picture.title} /> : <p>Sorry, an error has occurred: {errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    picture: lastPictureSelector(state),
    firstLoad: state.firstLoad,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = {
  imageStartRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
