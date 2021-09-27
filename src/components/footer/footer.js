import React, {Component} from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <p>these are some of Jarred's favorite recipes</p>
          <p>mmm mmm, that's good food! © ℗®™</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Space_Ghost.png/175px-Space_Ghost.png" alt="Jarred's alter ego"/>
        </div>
  )}
}

export default Footer;
