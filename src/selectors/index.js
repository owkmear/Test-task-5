import { createSelector } from 'reselect'

const dataSelector = (state) => state.data
export const pageSelector = (state) => state.page
export const lastPictureSelector = createSelector(dataSelector, (data) => (data.length > 0 ? data.slice(-1)[0] : []))

export const sliceDataSelector = createSelector(dataSelector, pageSelector, (data, page) => data.slice((page - 1) * 6, page * 6))

export const totalPagesSelector = createSelector(dataSelector, (data) => data.length)
