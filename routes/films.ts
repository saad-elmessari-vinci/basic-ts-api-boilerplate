import { Router } from "express";
import { Film } from "../types";

//creer trois ressources(3 films)

// Création des trois films


const films: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148, // en minutes
      budget: 160000000, // en dollars
      description: "Un voleur qui vole des secrets via des rêves.",
      imageUrl: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      budget: 63000000,
      description: "Un hacker découvre une réalité virtuelle contrôlée par des machines.",
      imageUrl: "https://example.com/matrix.jpg"
    },
    {
      id: 3,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      budget: 165000000,
      description: "Un groupe d'astronautes part en quête d'un nouveau foyer pour l'humanité.",
      imageUrl: "https://example.com/interstellar.jpg"
    }
  ];
  

const router = Router();
//ici les routeurs

export default router;

