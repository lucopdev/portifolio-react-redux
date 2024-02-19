import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 id="contactRef" className="contact-title">Escreva para mim</h1>
        <fieldset className="contact-fieldset">
          <input type="text" />
          <textarea />
        </fieldset>
      </div>
    );
  }
}

export default Contact;
