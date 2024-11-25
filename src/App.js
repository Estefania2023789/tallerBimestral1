// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import PersonCardList from "./Componentes/PersonCardList";
import AgeUpdater from "./Componentes/AgeUpdater";

export const personListData = [
  { id: 1, 
    avatarURL: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg', 
    name: 'Danny G.', 
    city: 'Quito', 
    country: 'Ecuador', 
    address: 'Ladrón de Guevara E11-253', 
    age: 38 
  },
  { id: 2, 
    avatarURL: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg', 
    name: 'Cristina', 
    city: 'Quito', 
    country: 'Ecuador', 
    address: 'Av. Colón y 10 de Agosto', 
    age: 15 
  },
  { id: 3, 
    avatarURL: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg', 
    name: 'Jorge', 
    city: 'Ambato', 
    country: 'Ecuador', 
    address: 'La República y 5 de Septiembre', 
    age: 25 
  },
  { id: 4, 
    avatarURL: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg', 
    name: 'Santiago', 
    city: 'Guayaquil', 
    country: 'Ecuador', 
    address: '10 de Agosto', 
    age: 10 
  },
];

function App() {
  const [people, setPeople] = useState(personListData);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  const handleIncreaseAge = (id) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, age: person.age + 1 } : person
      )
    );
  };

  return (
    <div className="contenedor-principal">
      <h1>Cinefest Manager</h1>
      <PersonCardList
        people={people}
        onSelectPerson={handleSelectPerson}
      />
      {selectedPerson && (
        <AgeUpdater
          person={selectedPerson}
          onIncreaseAge={handleIncreaseAge}
        />
      )}
    </div>
  );
}

export default App;
