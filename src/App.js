import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CommentsForm from './Components/CommentsForm';
import {connect} from 'react-redux';
import {
  getComments,addComments
} from './actions/comments-action';

class App extends Component {
    constructor(){
      super();
      this.state={
        CommentComp:'addComment'
      }
      // this.handleClick=this.handleClick.bind(this);
      this.handleCompChange=this.handleCompChange.bind(this);

    }
    handleCompChange(comp){
      this.setState({CommentComp:comp})
    }
  render() {
    const { comments } = this.props;
    console.log("comments", comments)
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Post Comments</h1>
        </header>
        <div className="container m-5">
        {this.state.CommentComp === 'addComment' && (
             <div className="row mb-4">
              <div className="col">
                <button type="button" className="btn btn-primary" onClick={this.handleCompChange.bind(this,'newComment')}>Add Comment</button>
              </div>
            </div>
          )}
          {this.state.CommentComp === 'newComment' && (
            <CommentsForm compChange={this.handleCompChange} submitComment={this.props.addComments} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 comments: state
});

const mapDispatchToProps = {
  addComments
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

