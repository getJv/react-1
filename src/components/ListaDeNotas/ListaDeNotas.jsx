import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";

class ListaDeNOtas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota title={note.title} content={note.content} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNOtas;
