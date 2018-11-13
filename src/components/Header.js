import React, {Component} from 'react';
import Clock from './Clock'

class Header extends Component {
  render() {
    console.log('[Header][Render]');
    return (
      <nav className={"navbar navbar-expand-sm navbar-dark bg-primary mb-3"}>
        <div className={"container"}>
          <a href="/" className={"navbar-brand"}>
            Driver License
          </a>
          <div className="navbar-brand">
            <Clock/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

