import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 id="contactRef" className="contact-title">
          Deixe seu recado
        </h1>
        <fieldset className="contact-fieldset">
          <div className="input-container">
            <span>Assunto:</span>
            <input type="text" />
          </div>
          <textarea />
          <button>Enviar</button>
        </fieldset>
      </div>
    );
  }
}

export default Contact;
