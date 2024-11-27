import { useImmer } from "use-immer";
import { useState } from "react";

//libros inicicales
const librosIniciales = [
  { id: 1, nombre: "libro1"},
  { id: 2, nombre: "libro2"},
  { id: 3, nombre: "libro3"}
];
//funcion libro
function Book({ libro, onDelete, onEdit, onSave }) {
  const [newName, setNewName] = useState(libro.nombre);

  return (
    <div>
      {libro.editando ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={() => onSave(libro.id, newName)}>Guardar</button>
        </>
      ) : (
        <>
          {libro.completada ? (
            <del>{libro.nombre}</del>
          ) : (
            <span>{libro.nombre}</span>
          )}
          <button onClick={() => onEdit(libro.id)}>Editar</button>
        </>
      )}
      <button onClick={() => onDelete(libro.id)}>Eliminar</button>
    </div>
  );
}
//funcion principal Library
export default function Library() {
  const [librosEstado,setLibrosEstado] = useImmer(librosIniciales);


  //eliminar 
  function handleDelete(idLibro) {
    setLibrosEstado((draft) =>
      draft.filter((libro) => libro.id !== idLibro)
    );
  }
//editar libro
  function handleEdit(idLibro) {
    setLibrosEstado((draft) => {
      const libro = draft.find((l) => l.id === idLibro);
      if (libro) {
        libro.editando = true;
      }
    });
  }
//guardar libro
  function handleSave(idLibro, newName) {
    setLibrosEstado((draft) => {
      const libro = draft.find((l) => l.id === idLibro);
      if (libro) {
        libro.nombre = newName;
        libro.editando = false;
      }
    });
  }
//lista libro
  return (
    <div>
      <h4>Lista de libros</h4>
      <ul>
      {librosEstado.map((libro) => (
        <Book
          key={libro.id}
          libro={libro}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSave={handleSave}
        />
      ))}
      </ul>
    </div>
  );
}
