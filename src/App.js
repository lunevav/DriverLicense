import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import { Provider } from 'react-redux'
// import store from './store'

// @USER COMPONENTS
import Header from './components/Header'
import Form from './components/Form'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'



class App extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      date: '',
      category: '',
      switcher: false,
      fontColor: '',
      cardColor: '',
      radius: '',
      cardSwitcher: true
    }
  }

  updateCard(name, date, category){
    this.setState({
      name,
      date,
      category,
      switcher: !this.state.switcher
    });
  };

  changeFontColor = (fontColor) => this.setState({fontColor});
  changeCardColor = (cardColor) => this.setState({cardColor});
  changeRadius = (radius) => this.setState({radius});

  render() {
    console.log('[App][Render]');
    const { name, date, category, switcher, fontColor, cardColor, radius } = this.state;
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
              fontColor={fontColor}
              cardColor={cardColor}
              radius={radius}
            />
            <CardBack
              switcher={switcher}
              fontColor={fontColor}
              cardColor={cardColor}
              radius={radius}
              changeFontColor={this.changeFontColor.bind(this)}
              changeCardColor={this.changeCardColor.bind(this)}
              changeRadius={this.changeRadius.bind(this)}
            />
          </div>
        </div>
    );
  }
}

export default App;
