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
              <CardNota
                index={index}
                title={note.title}
                content={note.content}
                noteCreate={this.props.noteCreate}
                nodeDelete={this.props.noteDelete}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNOtas;
