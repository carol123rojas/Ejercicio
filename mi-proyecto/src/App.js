import './App.css';

function Appcomponente() {
  return (
    <div className="app-container">
      <div className="container">
        <h1>Bienvenido a nuestro menú</h1>
        <div className="content">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="content">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="content">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container">
        <Form />
      </div>
    </div>
  );
}

const title = <h2>Nombre de la bebida</h2>;
const precio = <p>Precio</p>;
const text = <p>Descripción</p>;
const boton = <button type="button">añadir a carrito</button>;

function Card(title) {
  return (
    <section className="info-menu">
      <div className="card">
        <div className="content-img">
          <p>imagen</p>
        </div>
        {title}
        {precio}
        {text}
        {boton}
      </div>
    </section>
  );
}

function Form() {
  return (
    <section className="registro">
      <h2>Regristo</h2>
      <form>
        <input type="text" name="Nombre" id="" />
        <input type="text" name="2 Nombre" id="" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Appcomponente;