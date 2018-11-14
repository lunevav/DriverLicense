import React, {Component} from 'react';
import axios from 'axios';
import validateForm from '../tools/formValidation'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      category: '',
      formValid: false
    }
  }

  submitForm(e){
    e.preventDefault();

    //localhost:8090 POST request
    axios.post(`http://localhost:8090/driver-card/`, this.state).then(res => {
      if (res.status !== 200) console.log('PROBLEM:' + res.statusText);
    }).catch(error => console.log(error));

    //send info to the Card
    const { name, date, category } = this.state;
    this.props.submitFormHandler(name, date, category);
    this.setState({
      name: '',
      date: '',
      category: ''
    })
  }

  onChange = (e) =>{
    const { type, value, name } = e.target;
    const { category } = this.state;
     if (type === "checkbox" && category.indexOf(value) === -1){
      this.setState({
        category: category + value
      })
    }
    if (type === "checkbox" && category.indexOf(value) > -1){
      this.setState({
        category: category.replace(value, '')
      })
    }
    if (type !== "checkbox"){
      this.setState({
        [name]: value
      })
    }
  };


  componentDidUpdate(prevProps, prevState) {

      let a = validateForm(this.state.name, this.state.date, this.state.category);
      if ((!prevState.formValid && a) || (prevState.formValid && !a)) {
        this.setState({
          formValid: a
        })
      }
  }



  render() {
    console.log('[FormFront][Render]');
    return (
      <div className="row justify-content-center"
           style={this.props.switcher ? {display: 'none'} : {display: 'flex'}}>
        <div className="col-xl-5 col-lg-6 col-md-7 col-sm-8 p-0">
          <div className="card shadow">
            <div className="card-header">
              Driver License Card Creation Form
            </div>
            <div className="card-body">
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input className="form-control"
                         name="name"
                         placeholder="Enter your name..."
                         type='text'
                         onChange={this.onChange}
                         value={this.state.name}
                         title="20 letters max"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date of issue:</label>
                  <input className="form-control"
                         name="date"
                         placeholder="Enter date of issue..."
                         type='date'
                         onChange={this.onChange}
                         value={this.state.date}
                  />
                </div>
                <div className="form-group">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input card-checkbox"
                           type="checkbox"
                           name="catA"
                           value="A"
                           onChange={this.onChange}
                    />
                    <label className="form-check-label"
                           htmlFor="catA">A</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input card-checkbox"
                           type="checkbox"
                           name="catB"
                           value="B"
                           onChange={this.onChange}
                    />
                    <label className="form-check-label"
                           htmlFor="catB">B</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input card-checkbox"
                           type="checkbox"
                           name="catC"
                           value="C"
                           onChange={this.onChange}
                    />
                    <label className="form-check-label"
                           htmlFor="catC">C</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input card-checkbox"
                           type="checkbox"
                           name="catD"
                           value="D"
                           onChange={this.onChange}
                    />
                    <label className="form-check-label"
                           htmlFor="catD">D</label>
                  </div>
                </div>
                <input type="submit"
                       value="Send"
                       className="btn btn-primary"
                       disabled={this.state.formValid ? "" : "disabled"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;