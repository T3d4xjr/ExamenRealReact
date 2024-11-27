import { useImmer } from "use-immer";
import { useState } from "react";

const librosIniciales = [
  { id: 1, nombre: "libro1"},
  { id: 2, nombre: "libro2"},
  { id: 3, nombre: "libro3"}
];

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

export default function Library() {
  const [librosEstado,setLibrosEstado] = useImmer(librosIniciales);

  function handleDelete(idLibro) {
    setLibrosEstado((draft) =>
      draft.filter((libro) => libro.id !== idLibro)
    );
  }

  function handleEdit(idLibro) {
    setLibrosEstado((draft) => {
      const libro = draft.find((l) => l.id === idLibro);
      if (libro) {
        libro.editando = true;
      }
    });
  }

  function handleSave(idLibro, newName) {
    setLibrosEstado((draft) => {
      const libro = draft.find((l) => l.id === idLibro);
      if (libro) {
        libro.nombre = newName;
        libro.editando = false;
      }
    });
  }

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
