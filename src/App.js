import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import React, { Component } from "react";

import "./assets/index.css";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  noteCreate(title, content) {
    const newNote = { title, content };
    const newNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro noteCreate={this.noteCreate.bind(this)} />
        <ListaDeNotas notas={this.state.notes} />
      </section>
    );
  }
}

export default App;
