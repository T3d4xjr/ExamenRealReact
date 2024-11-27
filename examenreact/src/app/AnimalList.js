import { useState } from "react";


const animalesIniciales = [
  { id: 1, nombre: "Canguro",especie:"Mamifero",edad:"24",sexo:"Masculino" },
];

let contadorID = 2;

function Animal({ animal, onDelete }) {
  return (
    <div>
      <li>
        <p>Nombre: {animal.nombre}</p>
        <p>Especie: {animal.especie}</p>
        <p>Edad: {animal.edad}</p>
        <p>Genero: {animal.sexo}</p>
        <button onClick={() => onDelete(animal.id)}>Eliminar</button>
      </li>
    </div>
  );
}

export default function AnimalList() {
  const [animalesEstado, setAnimalesEstado] = useState(animalesIniciales);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaEspecie, setNuevaEspecie] = useState("");
  const [nuevaEdad, setNuevaEdad] = useState("");
  const [nuevoGenero, setNuevoGenero] = useState("");

  function AgregarAnimal(e) {
    e.preventDefault();

    if (nuevoNombre !== "" && nuevaEspecie !=="" && nuevaEdad !=="" && nuevoGenero !=="") {
     
      const nuevosEstudiantes = [
        ...animalesEstado,
        { id: contadorID++, nombre: nuevoNombre,especie:nuevaEspecie,edad:nuevaEdad,sexo:nuevoGenero},
      ].map((animal) => ({
        ...animal,
        nombre: animal.nombre,
        especie:animal.especie,
        edad:animal.edad,
        sexo:animal.sexo,
      }));

      setAnimalesEstado(nuevosEstudiantes);
      setNuevoNombre("");
      setNuevaEspecie("");
      setNuevaEdad("");
      setNuevoGenero("");
    }
  }

  function handleDelete(animalID) {
    setAnimalesEstado(animalesEstado.filter((animal) => animal.id !== animalID));
  }

  return (
    <div>
      <form onSubmit={AgregarAnimal}>
        <label>
          Nombre:{" "}
          <input
            type="text"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        </label>
        <label>
          Especie:{" "}
          <input
            type="text"
            value={nuevaEspecie}
            onChange={(e) => setNuevaEspecie(e.target.value)}
          />
        </label>
        <label>
          Edad:{" "}
          <input
            type="number"
            value={nuevaEdad}
            onChange={(e) => setNuevaEdad(e.target.value)}
          />
        </label>
        <label>
          Genero:{""}
        <select value={nuevoGenero} onChange={(e) => setNuevoGenero(e.target.value)}>
        <option value="">Selecciona un género</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
        </label>
        <input type="submit" value="Agregar" />
      </form>
      <h3>Lista de animales</h3>
      <ul>
        {animalesEstado.map((animal) => (
          <Animal
          animal={animal}
            key={animal.id}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
