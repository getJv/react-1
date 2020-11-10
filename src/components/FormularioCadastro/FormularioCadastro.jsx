import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.content = "";
  }

  _handlerTitle(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }
  _handlerContent(event) {
    event.stopPropagation();
    this.content = event.target.value;
  }
  _handlerCardCreate(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.noteCreate(this.titulo, this.content);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._handlerCardCreate}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerContent.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
