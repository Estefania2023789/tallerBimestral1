import React from "react";

function AgeUpdater({ person, onIncreaseAge }) {
  return (
    <div className="contenedor-actualizador">
      <h2>Persona Seleccionada</h2>
      <div className="tarjeta-actualizacion">
        <img src={person.avatarURL} alt={person.name} className="avatar" />
        <h4>{person.name}</h4>
        <p>
          {person.city}, {person.country}
        </p>
        <p>Edad: {person.age}</p>
        <button className="boton-incrementar" onClick={() => onIncreaseAge(person.id)}>Incrementar Edad </button>
      </div>
    </div>
  );
}

export default AgeUpdater;
