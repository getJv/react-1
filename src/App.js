import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import React, { Component } from "react";

import "./assets/index.css";
import "./assets/App.css";

class App extends Component {
  noteCreate() {}

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro noteCreate={this.noteCreate} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
