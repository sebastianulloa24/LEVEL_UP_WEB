import React from 'react'
import CardItem from './CardsItem'
import RTX5060 from '../assets/imagenes/index/banner-RTX5060.jpg'
import JuegoWukong from '../assets/imagenes/index/banner-wukong.jpg'
import juegoElden from '../assets/imagenes/Productos/producto-elden-ring.avif'
import juegoZelda from '../assets/imagenes/Productos/producto-zelda.jpg'
import play5 from '../assets/imagenes/Productos/producto-play-5.jpg'
import ram from '../assets/imagenes/Productos/producto-ram-16gb.jpg'
// import o from '../assets/imagenes/index'


function CardsList() {
  const cardsData = [
    {
      id: 1,
      title: "RTX 5060",
      text: "Tarjeta gráfica de alto rendimiento ideal para gaming y diseño gráfico. Disfruta de los últimos juegos con máxima calidad visual.",
      image: RTX5060,
      buttonText: "Ir a comprar",
      link: "#"
    },
    {
      id: 2,
      title: "League of Legends: Wukong",
      text: "Vive la épica aventura de Wukong en esta versión de consola. Domina combates, resuelve acertijos y explora un mundo lleno de secretos y desafíos legendarios.",
      image: JuegoWukong,
      buttonText: "Ir a comprar",
      link: "#"
    },
    {
      id: 3,
      title: "Elden Ring",
      text: "Explora un vasto mundo abierto lleno de desafíos, combates épicos y aventuras inolvidables.",
      image: juegoElden,
      buttonText: "Ir a comprar",
      link: "#"
    },
    {
      id: 4,
      title: "The Legend of Zelda: Breath of the Wild",
      text: "Embárcate en una aventura épica en Hyrule, resolviendo acertijos y derrotando enemigos para salvar el reino.",
      image: juegoZelda,
      buttonText: "Ir a comprar",
      link: "#"
    },
    {
      id: 5,
      title: "PlayStation 5",
      text: "Consola de última generación con gráficos sorprendentes, almacenamiento ultrarrápido y compatibilidad con juegos exclusivos.",
      image: play5,
      buttonText: "Ir a comprar",
      link: "#"
    },
    {
      id: 6,
      title: "Memoria RAM 16GB DDR4",
      text: "Optimiza el rendimiento de tu PC con esta memoria RAM de alta velocidad, ideal para gaming y edición de video.",
      image: ram,
      buttonText: "Ir a comprar",
      link: "#"
    }
    ,
    {
      id: 7,
      title: "RTX5060",
      text: "Tarjeta gráfica de alto rendimiento ideal para gaming y diseño.",
      image: RTX5060,
      buttonText: "Ir a comprar",
      link: "#"
    },
    {
      id: 8,
      title: "",
      text: "",
      image: JuegoWukong,
      buttonText: "Ir a comprar",
      link: "#"
    },
    // {
    //   id: 9,
    //   title: "",
    //   text: "MANUEEEEEEEL GEI",
    //   image: juegoElden,
    //   buttonText: "Ir a comprar",
    //   link: "#"
    // },
    // {
    //   id: 10,
    //   title: "",
    //   text: "",
    //   image: juegoZelda,
    //   buttonText: "Ir a comprar",
    //   link: "#"
    // },
    // {
    //   id: 11,
    //   title: "",
    //   text: "",
    //   image: play5,
    //   buttonText: "Ir a comprar",
    //   link: "#"
    // },
    // {
    //   id: 12,
    //   title: "",
    //   text: "",
    //   image: ram,
    //   buttonText: "Ir a comprar",
    //   link: "#"
    // }
    // {
    //     id: 7,
    //     title: "",
    //     text: "",
    //     image: "",
    //     buttonText: "Ir a comprar",
    //     link: "#"
    // },
    // {
    //     id: 8,
    //     title: "",
    //     text: "",
    //     image: "",
    //     buttonText: "Ir a comprar",
    //     link: "#"
    // }
    
  ]
  return (
    <div className="container">
      <div className="row text-center">
        {cardsData.map(card => (
          <CardItem
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
            buttonText={card.buttonText}
            link={card.link}

          />
        ))}
      </div>
    </div>
  )
}

export default CardsList


//OBSERVACIONES
/*
Lo que hicimos con los cards es userlos con props, pero "props" no es el componente ni el diseño — es el mecanismo con el que un componente recibe información desde afuera.

Qué son las props
En React (y Compose en Android también tiene un concepto similar con parámetros @Composable),
las props (properties) son los valores o datos que le pasas a un componente para que sea reutilizable y dinámico.

*/