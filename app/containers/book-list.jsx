import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.jsx';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList = () => {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.seleccionado(book)}
                    key={book.title}
                    className="list-group-item grow" >
                    <i class="fa fa-book" aria-hidden="true"></i> {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4" >
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props
//on this BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ seleccionado: selectBook }, dispatch);
    // return {
    //     seleccionado: selectBook
    // }
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)

