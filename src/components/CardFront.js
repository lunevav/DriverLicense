import React, {Component} from 'react';

class CardFront extends Component {


  render() {
    console.log('[Card][Render]');
    return (
      <div className="row justify-content-center"
           style={!this.props.switcher ? {display: 'none'} : {display: 'flex'}}>
        <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 p-0"
             style={!this.props.cardToggler ? {display: 'none'} : null}
        >
          <div className="card m-3 div-shadow"
               style={{color: this.props.fontColor,
                 background: this.props.cardColor,
                 borderRadius: this.props.radius+'px'}}
          >
            <div className="card-body container shadow p-0">
              <div className="row card-height">
                <div className="col pt-3 pl-4 border-right">
                  <h5 className="mb-4">Your Driver License</h5>
                  <p>Name: <span>{this.props.name}</span></p>
                  <p>Date of issue: <span>{this.props.date}</span></p>
                  <p>Category: <span>{this.props.category}</span></p>
                </div>
                <div className="col mt-5 pt-4 pr-5 text-center">
                  <h5>Your Photo</h5>
                  <div>
                    <img className="img-fluid rounded-circle"
                         style={{width:'160px'}}
                         alt=""
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopvsysEeiwuOVxe-sA9iMDbA78uuO0g30jn-Nl820A_v4L25nDA"
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

export default CardFront;