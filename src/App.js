import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import React, { Component } from "react";

import "./assets/index.css";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categorias: [],
    };
  }

  categoryCreate(title) {
    const newCategorias = [...this.state.categorias, title];
    const newState = {
      ...this.state,
      categorias: newCategorias,
    };
    this.setState(newState);
  }
  noteCreate(title, content) {
    const newNote = { title, content };
    const newNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newNotes,
    };
    this.setState(newState);
  }

  noteDelete(index) {
    let arr = this.state.notes;
    arr.splice(index, 1);
    this.setState({
      notes: arr,
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro noteCreate={this.noteCreate.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categoryCreate={this.categoryCreate.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            notas={this.state.notes}
            noteDelete={this.noteDelete.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
