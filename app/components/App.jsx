import React, { Component } from 'react';
import BookList from '../containers/book-list.jsx';
import BookDetail from '../containers/book-detail.jsx';
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <BookList />
                    <BookDetail />
                </div>
            </div>
        );
    }
}