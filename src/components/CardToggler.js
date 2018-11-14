import React, {Component} from 'react';

class CardToggler extends Component {

  buttonClick = () => {this.props.toggleCard();}

  render() {
    return (
      <div className="row justify-content-center"
           style={!this.props.switcher ? {display: 'none'} : {display: 'flex'}}
      >
        <button className="btn btn-primary m-3"
                onClick={this.buttonClick}
        >
          FRONT/BACK
        </button>
      </div>
    );
  }
}

export default CardToggler;