import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author_name: "Author_name",
        book_length: "Book_length",
        book_title: "Book_title",
        hc_pb: "Hc_pb",
        isbn: "Isbn"
    },
    reducers: {
        chooseAuthor_name: (state, action) => { state.author_name = action.payload},
        chooseBook_length: (state, action) => { state.book_length = action.payload},
        chooseBook_title: (state, action) => { state.book_title = action.payload},
        chooseHc_pb: (state, action) => { state.hc_pb = action.payload},
        chooseIsbn: (state, action) => { state.isbn = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAuthor_name, chooseBook_length, chooseBook_title, chooseHc_pb, chooseIsbn} = rootSlice.actions