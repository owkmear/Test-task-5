import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { imageDelete, changePage } from '../../store/actions/images'
import { pageSelector, sliceDataSelector, totalPagesSelector } from '../../selectors'

class History extends React.Component {
  handleChangePage = (swapPage) => {
    const { page, changePage } = this.props
    if (page !== swapPage) changePage(swapPage)
  }
  handleImageDelete = (imageId) => {
    const { imageDelete, changePage, page, totalPages } = this.props
    imageDelete(imageId)
    if (totalPages > 6 && (totalPages - 1) % 6 === 0) changePage(page - 1)
  }
  render() {
    const { sliceData, page, totalPages } = this.props

    const pageLinks = []
    if (totalPages > 6)
      for (let pageNumber = 1; pageNumber <= Math.ceil(totalPages / 6); pageNumber++)
        pageLinks.push(
          <div key={pageNumber} onClick={() => this.handleChangePage(pageNumber)} className={'pagination__item' + (page === pageNumber ? ' pagination__item_active' : '')}>
            {pageNumber}
          </div>
        )

    const images = sliceData.map((image) => {
      const timeFromNow = `Uploaded ${moment(image.import_datetime).fromNow()}`
      return (
        <div key={image.id} className="history__item picture">
          <div className="picture__box">
            <h4 className="picture__title">{image.title}</h4>
            <div className="picture__image">
              <img src={image.images.fixed_height_small.url} alt={image.title} />
            </div>
            <span className="picture__time">{timeFromNow}</span>
            <button
              className="picture__button button"
              onClick={() => {
                this.handleImageDelete(image.id)
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )
    })
    return (
      <div className="history">
        <div className="container">
          <div className="history__wrap">{images}</div>
          {totalPages ? (
            <nav className="history__pagination pagination">
              <span className="pagination__summary">
                Show {page * 6 - 5} - {page * 6 > totalPages ? totalPages : page * 6} of {totalPages} images
              </span>
              {totalPages > 6 && <div className="pagination__links">{pageLinks}</div>}
            </nav>
          ) : (
            <div className="pagination__no-records">No images</div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: pageSelector(state),
    sliceData: sliceDataSelector(state),
    totalPages: totalPagesSelector(state)
  }
}

const mapDispatchToProps = {
  imageDelete,
  changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
