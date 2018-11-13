import React, {Component} from 'react';

class TestComponent extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  sendForm = (e) => {
    e.preventDefault();
    console.log('121212');
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
        <form onSubmit={this.sendForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="name"
                   className="form-control"
                   placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Date</label>
            <input type="date"
                   className="form-control"
                   id="exampleInputPassword1"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default TestComponent;
