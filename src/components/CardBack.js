import React, {Component} from 'react';

class CardBack extends Component {
  constructor(){
    super();

    this.state = {
      fontColor: ''
    }
  }

  onChange = (e) => {
    this.setState({
      fontColor: e.target.value
    })
    this.props.changeFontColor(this.state.fontColor);
  }

  render() {
    console.log('[Card][Render]');
    return (
      <div className="row justify-content-center"
           style={!this.props.switcher ? {display: 'none'} : {display: 'flex'}}>
        <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 p-0">
          <div className="card m-3"
               style={{color: this.props.fontColor}}
          >
            <div className="card-body container shadow p-0">
              <div className="row"
                   style={{height:'340px'}}
              >
                <div className="col-6 pt-3 pl-4">
                  <h5 className="mb-4">Your Driver License</h5>
                  <div className="form-group">
                    <label htmlFor="name">Card color:</label>
                    <input className="form-control"
                           placeholder="Enter card color hex code..."
                           type='text'
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Font Color:</label>
                    <input className="form-control"
                           placeholder="Enter font color hex code..."
                           type='text'
                           onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Radius:</label>
                    <input className="form-control"
                           placeholder="Enter radius..."
                           type='text'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBack;