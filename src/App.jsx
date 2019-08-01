import React from 'react';
import './App.css';
import axios from 'axios';
import UserPost from './UserPost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 5,
      posts: []
    }
    this.incClick = this.incClick.bind(this)
    this.decClick = this.decClick.bind(this)
  }

  incClick() {
    let userId = this.state.userId;
    if (userId < 10){
      userId += 1;
    } else {
      userId = 1;
    }
    this.setState({
      userId
    }, function() {
      this.newDataCall()
    })
    

  }

  decClick() {
    let userId = this.state.userId;
    if (userId > 1){
      userId -= 1;
    } else {
      userId = 10;
    }
    this.setState({
      userId
    },function() {
      this.newDataCall()
    })
    
  }

  newDataCall() {

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.userId}`).then(res => {
      let posts = res.data;
      this.setState({
        posts
      })
    })
  }
  

  componentDidMount() {
    this.newDataCall()
  }

  render() {
    let postArr = this.state.posts
    // console.log(postArr)
    return(
      <>
        <div className="App">
          <h1>Cycle Through Users</h1>
          <input type="button" name="dec" value="<" onClick={this.decClick}></input>
          <input type="button" name="inc" value=">" onClick={this.incClick}></input>
            {/* {postArr.map((post, i) => (
              <p>Test!</p>
            )
            )} */}
          {this.state.posts.map((post, i) =>
            <UserPost key={i} post={this.state.posts[i]}/>
            )}
        </div>
      </>
    )
  }
}

export default App;