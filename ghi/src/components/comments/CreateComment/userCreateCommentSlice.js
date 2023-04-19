import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', resort_id: '64404dd3c9ea1983943e11d6', rating: 3, comment: 'Decent, but forgettable' },
  { id: '2', resort_id: '64404dd3c9ea1983943e11d6', rating: 2, comment: 'Mediocre' }
]

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { commentAdded } = commentsSlice.actions

export default commentsSlice.reducer
