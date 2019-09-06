import React from 'react';
import List from "./container/List";
import Form from "./container/Form";
import './App.css'

export default class App extends React.Component{
   constructor() {
    super();
    this.state = {
      data: [
        {
          username: " mwahyudimw",
          email: "wahyudi14@gmail.com"
        },
        {
          username: " frontenddev",
          email: "fronend@gmail.com"
        }
        
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, email, data } = this.state;
    if (email === undefined || email === "") {
      alert("username dan email kosong");
    }
     else {
      data.push({ username, email });
      this.setState({
        data,
        username: "",
        email: ""
      });
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <>
        
        <Form
          onChange={this.onChangeText}
          name={username}
          password={password}
          onSubmit={this.onSubmit}
        />
        <List data={this.state.data} />
      </>
    );
  }
}




