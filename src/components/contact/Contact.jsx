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

    if ((name === '', email === '', message === '')) {
      alert('Preencha todos os campos');
      return;
    }

    console.log(name, email, message);
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="0" className="contact">
        <h1 id="contactRef" className="contact-title">
          Deixe seu recado
        </h1>
        <form action="https://formspree.io/f/mgvwerny" method="POST" className="form">
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
        </form>
      </div>
    );
  }
}

export default Contact;
