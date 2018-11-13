import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

// @USER COMPONENTS
import Header from './components/Header'
import Form from './components/Form'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import TestComponent from './components/TestComponent'



class App extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      date: '',
      category: '',
      switcher: false
    }
  }

  updateCard(Name, Date, Category){
    this.setState({
      name: Name,
      date: Date,
      category: Category,
      switcher: !this.state.switcher
    });
    console.log(this.state);
  };

  render() {
    console.log('[App][Render]');
    const { name, date, category, switcher } = this.state;
    return (
        <div>
          <Header/>
          <div className="container">
            <Form
              switcher={switcher}
              submitFormHandler={this.updateCard.bind(this)}
            />
            <CardFront
              name={name}
              date={date}
              category={category}
              switcher={switcher}
            />
            <CardBack
              switcher={switcher}
            />
          </div>
        </div>
    );
  }
}

export default App;
