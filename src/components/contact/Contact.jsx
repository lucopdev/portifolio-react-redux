import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = () => {
    const { name, email, message } = this.state;
    console.log(name, email, message);
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="contact">
        <h1 id="contactRef" className="contact-title">
          Deixe seu recado
        </h1>
        <fieldset className="contact-fieldset">
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={ name }
              onChange={ (event) => this.handleChange(event) }
              placeholder="Nome"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ (event) => this.handleChange(event) }
              placeholder="Email"
            />
          </div>
          <textarea
            name="message"
            value={ message }
            onChange={ (event) => this.handleChange(event) }
            placeholder="Digite sua mensagem..."
          />
          <button onClick={ this.handleClick }>Enviar</button>
        </fieldset>
      </div>
    );
  }
}

export default Contact;
