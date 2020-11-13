import React, { Component } from "react";
import "./CardNota.css";
import delete_icon from "../../assets/delete.svg";
class CardNota extends Component {
  _delete() {
    const index = this.props.index;
    this.props.nodeDelete(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo"> {this.props.title} </h3>
          <img
            src={delete_icon}
            alt="Excluir"
            onClick={this._delete.bind(this)}
          />
        </header>
        <p className="card-nota_texto"> {this.props.content} </p>
      </section>
    );
  }
}

export default CardNota;
