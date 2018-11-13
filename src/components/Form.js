import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      category: '',
    }
  }

  submitForm(e){
    e.preventDefault();
    const { name, date, category } = this.state;
    this.props.submitFormHandler(name, date, category);
    this.setState({
      name: '',
      date: '',
      category: ''
    })
  }

  onChange = (e) =>{
    if (e.target.type == "checkbox" && this.state.category.indexOf(e.target.value) == -1){
      this.setState({
        category: this.state.category + e.target.value
      })
    }
    if (e.target.type == "checkbox" && this.state.category.indexOf(e.target.value) > -1){
      this.setState({
        category: this.state.category.replace(e.target.value, '')
      })
    }
    if (e.target.type !== "checkbox"){
      this.setState({
        [e.target.name]: e.target.value
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