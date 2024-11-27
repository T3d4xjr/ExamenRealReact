"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejericcio1 from "./AnimalList"
import Ejercicio2 from "./ImageCarousel";
import Ejercicio3 from "./Library"


export default function Home() {
  const items = [
    {
      titulo: "titulo1",
      imagen: "foto1.jpeg"
    },
    {
      titulo: "titulo2",
      imagen: "foto2.jpeg"
    },
    {
      titulo: "titulo3",
      imagen: "foto3.png"
    },
    {
      titulo: "titulo4",
      imagen: "foto4.jpeg"
    },
    // Agrega más ítems según sea necesario...
  ];
  return (
    <div>
      <h1>Ejercicios examen </h1>
      <h2>Ejercicio1</h2>
      <Ejericcio1/>
      <h2>Ejercicio2</h2>
      <Ejercicio2 items={items}/>
      <h2>Ejercicio3</h2>
      <Ejercicio3/>
    </div>
  );
}
