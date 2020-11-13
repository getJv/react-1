import React, { Component } from "react";
import "./ListaDeCategorias.css";

class ListaDeCategorias extends Component {
  _handlerCategoryInput(e) {
    if (e.key !== "Enter") return;
    this.props.categoryCreate(e.target.value);
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((item, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {item}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          name=""
          id=""
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerCategoryInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
