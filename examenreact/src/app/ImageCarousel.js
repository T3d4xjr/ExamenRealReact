import { useState } from "react";

/**
 * En este ejercicio llamo 
 * item a cada seccion de titulos y imagenes
 * Por eso las explicaciones las doy hablo del propio item 
 * 
 */
export default function ImageCarousel({ items }) {
  // Usamos el estado para manejar el índice del ítem actual
  const [indiceActual, setIndiceActual] = useState(0);

  // Función para mostrar la siguiente frase o ítem
  function siguienteItem() {
    if (indiceActual < items.length - 1) {
      setIndiceActual((prevIndice) => prevIndice + 1);
    }
  }

  // Función para mostrar el ítem anterior
  function anteriorItem() {
    if (indiceActual > 0) {
      setIndiceActual((prevIndice) => prevIndice - 1);
    }
  }

  // Obtenemos el ítem actual de la lista de items
  const itemActual = items[indiceActual];

  return (
    <div>
      {/* Mostrar el contenido del ítem actual */}
      <h3>{itemActual.titulo}</h3>
      {itemActual.imagen && <img src={itemActual.imagen} alt={itemActual.titulo} />}
      
      <div>
        {/* Botones para navegar entre los ítems */}
        <button onClick={siguienteItem} disabled={indiceActual === items.length - 1}>
          Siguiente
        </button>
        <button onClick={anteriorItem} disabled={indiceActual === 0}>
          Anterior
        </button>
      </div>
    </div>
  );
}
