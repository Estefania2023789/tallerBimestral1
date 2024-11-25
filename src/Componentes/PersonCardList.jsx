import React from "react";

// Uso de desestructuracion directamente en parametros
function PersonCardList({ people, onSelectPerson }) {
  const permitidos = people.filter((person) => person.age >= 18);
  const noPermitidos = people.filter((person) => person.age < 18);

  const renderPersonCard = (person) => (
    <div key={person.id} className="tarjeta-persona">
      <img src={person.avatarURL} alt={person.name} className="avatar" />
      <h4>{person.name}</h4>
      <p>
        {person.city}, {person.country}
      </p>
      <p>{person.address}</p>
      <p>Edad: {person.age}</p>
      <button className="boton-seleccionar" onClick={() => onSelectPerson(person)}>Seleccionar</button>
    </div>
  );

  return (
    <div className="contenedor-cinefest">
      <div className="permitidos-card">
        <h2>Permitidos</h2>
        <div className="lista-tarjetas">
            {permitidos.map(renderPersonCard)}
        </div>
      </div>
      <div className="no-permitidos-card">
        <h2>No Permitidos</h2>
        <div className="lista-tarjetas">
            {noPermitidos.map(renderPersonCard)}
        </div>
      </div>
    </div>
  );
}

export default PersonCardList;
