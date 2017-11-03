export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an accion
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}