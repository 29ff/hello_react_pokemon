import React, { Component } from 'react';
import '../style_components/Footer.css';

class Footer extends Component {
   render() {
      return (
         <div className="footer">
            <p><strong>Author</strong>: <em>NBHung</em></p>
            <p><strong>Facebook</strong>: <em><a href={this.props.link} target="_blank">Nguyễn Bá Hùng</a></em></p>
         </div>
      )
   }
}

export default Footer;