import { Injectable } from '@angular/core';
import { Peliculas } from './_Modules/Peliculas';

import {Ventas} from './_Modules/Ventas';
@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {
  menuItems = [
    { name: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },

  ];
  entradas: any[] = [
    { nombreEntrada: 'Normal', precio: 8.90, numero: 0 },
    { nombreEntrada: 'Abono Joven', precio: 6.50, numero: 0 },
    { nombreEntrada: 'Familia Numerosa', precio: 6.50, numero: 0 }

  ];
  pelis = [
    { titulo  : 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Contact', route: '/contact' }
  ];
  ventas:any[] = []

  peliculas: Peliculas[] = [
    new Peliculas(1, "Super Mario Bros: La película", 'Adaptación de la serie de videojuegos de Nintendo. La película cuenta la historia de Mario y Luigi, dos hermanos que viajan a un mundo oculto para rescatar a la Princesa Peach, capturada por el malvado Rey Bowser. Las cosas, sin embargo no serán sencillas. Mario y Luigi tendrán que enfrentarse a un ejército de setas animadas antes de luchar contra su oponente. Rutas de ladrillos y castillos con múltiples peligros serán algunos de los obstáculos que los hermanos tendrán que superar para conseguir su objetivo.', ' Aaron Horvath, Michael Jelenic ', 'Chris Pratt como Mario, Anya Taylor-Joy como la Princesa Peach, Charlie Day como Luigi, Jack Black como Bowser, Keegan-Michael Key como Toad, Seth Rogen como Donkey Kong, Fred Armisen como Cranky Kong, Sebastian Maniscalco como el Capataz Spike, Kevin Michael Richardson como Kamek, Khary Payton como el Rey Pingüino, Eric Bauza como los Koopas Soldados, Rino Romano como el Tío Tony, John DiMaggio como el Tío Arthur, Jessica DiCicco como un Toad Amarillo, Juliet Jelenic como Destello.', '1h 32min', 'COMEDIA, AVENTURA, ANIMACIÓN', '5 Abril 2023', '../assets/mariosinopsis.jpg'),
    new Peliculas(2, "Fast and Furious X", 'Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa. En "Fast & Furious 5", Dom y su equipo derrotaron al notorio rey brasileño de la droga, Hernán Reyes, y acabaron con su imperio en un puente de Río de Janeiro. Pero no saben que Dante, el hijo de Reyes, lo vio todo y ha pasado los últimos doce años planeando cómo hacérselo pagar a Dom. El complot de Dante desperdigará a la familia de Dom desde Los Ángeles hasta las catacumbas de Roma, de Brasil a Londres, y de Portugal a la Antártida. Aparecerán nuevos aliados y reaparecerán viejos enemigos. Pero todo cambiará cuando Dom descubra que su hijo de ocho años es el objetivo escogido por Dante para saciar su sed de venganza.', 'Louis Leterrier', 'Rita Moreno, Tyrese Gibson, Jason Statham, Michelle Rodriguez, Helen Mirren, Vin Diesel, Brie Larson, Jason Momoa, Sung Kang, Alan Ritchson, Scott Eastwood, Charlize Theron, John Cena, Jordana Brewster, Daniela Melchior, Chris “Ludacris” Bridges, Nathalie Emmanuel', '2h 21min', 'ACCIÓN, THRILLER', '19 Mayo 2023', '../assets/f&fcarrusel.jpg'),
    new Peliculas(3, "La sirenita", 'Ariel, la más joven de las hijas del Rey Tritón y la más desafiante, desea saber más sobre el mundo más allá del mar y, mientras visita la superficie, se enamora del apuesto Príncipe Eric. Si bien las sirenas tienen prohibido interactuar con los humanos, Ariel debe seguir su corazón. Así, hace un trato con la malvada bruja del mar, Úrsula, que le da la oportunidad de experimentar la vida en la tierra, lo que pone en peligro su vida y la corona de su padre.', 'Rob Marshall', 'Javier Bardem, Awkwafina , Jacob Tremblay, Melissa McCarthy, Jonah Hauer-King, Art Malik, Daveed Diggs, Noma Dumezweni, Halle Bailey.', '2h 15min', 'FAMILIAR, MUSICAL, FANTASÍA', '26 Mayo 2023', '../assets/sirenitacarrusel.jpg'),
    new Peliculas(4, "Spiderman: Cruzando el Universo", 'Segunda entrega de las aventuras de Miles Morales tras el filme de animación ganador del Oscar Spider-Man: Un nuevo universo (2018). Para demostrar lo que vale y transportase a través del Multiverso, el joven Spider-Man de Brooklyn se aliará con Gwen Stacy. Tras este reencuentro, los dos jóvenes arácnidos conocerán a todo un grupo de élite con los mejores Spider-Man de los diferentes Multiversos. Claro que ser un Hombre Araña también tiene sus sacrificios, y Miles Morales deberá tomar importantes decisiones. Cuando esté en juego salvar cada uno de los mundos, además de a las personas más queridas, Miles optará por hacerlo a su manera.', 'Joaquim Dos Santos, Kemp Powers, Justin Thompson', 'Nicolas Cage, Kimiko Glenn, Liev Schreiber, Kathryn Hahn, Jorma Taccone, Joaquín Cosío.', '1H 55min', 'ACCIÓN, AVENTURA, ANIMACIÓN', '2 Junio 2023', '../assets/spiderman.jpg'),
    new Peliculas(5, "Guardianes de la Galaxia 3", 'Sigue a Star-Lord, todavía recuperándose de la pérdida de Gamora, que debe reunir a su equipo para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se completa, podría llevar al final de los Guardianes tal como los conocemos.', 'James Gunn', 'Bradley Cooper, Chris Pratt, Karen Gillan, Zoe Saldana, Vin Diesel, Will Poulter, Elizabeth Debicki, Pom Klementieff, Sean Gunn, Chukwudi Iwuji, Maria Bakalova, Dave Bautista', '2h 30min', 'ACCIÓN, COMEDIA, AVENTURA', '4 Mayo 2023', '../assets/guardianes carrusel.jpg'),
    new Peliculas(6, "Asedio", '¿Qué es ser español? Dani (Natalia de Molina) lo tiene muy claro. En su caso es servir a su país como antidisturbios, honrar su bandera. Hacer cumplir la Ley. Siempre pensó que ser policía era una forma de proteger a la gente, de hacer justicia. Pero durante un desahucio en un barrio conflictivo de Madrid, Dani se encontrará con un dinero escondido, una trama de corrupción policial y un crimen que harán que tenga que huir por su vida en un territorio hostil, en el que no conoce el idioma, no es bien recibida y su autoridad no vale nada. Sólo podrá contar con la ayuda de Nasha, una joven nigeriana a la que acaba de desahuciar, y su hijo Little. Y será entonces cuando se dé cuenta de que si el sistema para el que trabaja no es la solución, quizás siempre fue parte del problema.', 'Miguel Ángel Vivas', 'Natalia de Molina, Fernando Valdivielso, Francisco Reyes, Alejandro Casaseca, Chani Martín, Federico Pérez Rey, Bella Agossou', '1h 36min', 'ACCIÓN, AVENTURA, CRIMEN', '5 Mayo 2023', '../assets/asediocarrusel.jpg'),
    new Peliculas(7, "65", 'Después de un catastrófico accidente en un planeta desconocido, el piloto Mills (Adam Driver) descubre rápidamente que realmente está varado en la Tierra… hace 65 millones de años. Ahora, con solo una oportunidad de rescate, Mills y la otra única superviviente Koa, deberán abrirse camino a través del desconocido territorio plagado con peligrosas criaturas prehistóricas en una épica lucha por sobrevivir.', 'Scott Beck, Bryan Woods', 'Adam Driver, Ariana Greenblatt, Chloe Coleman.', '1h 33min', 'AVENTURA, ACCION, DRAMA, CIENCIA FICCION', '24 Marzo 2023', '../assets/65carrusel.jpg'),
    new Peliculas(8, "Love Again", '¿Qué ocurriría si un mensaje de texto al azar te llevara al amor de tu vida? En esta comedia romántica, mientras intenta superar la pérdida de su prometido, Mira Ray envía una serie de mensajes románticos a su antiguo número de teléfono… sin tener en cuenta que el número había sido reasignado al nuevo teléfono de trabajo de Rob Burns. Rob, periodista, queda sorprendido por la honestidad de los mensajes de texto. Cuando le asignan la tarea de escribir un artículo sobre la mega estrella Celine Dion, él le pide ayuda para averiguar cómo conocer a Mira en persona… y conquistar así su corazón.', 'Jim Strouse', 'Priyanka Chopra Jonas, Celia Imrie, Omid Djalili, Russell Tovey, Sam Heughan, Céline Dion', '1h 44min', 'DRAMA, ROMANCE, COMEDIA', '12 Mayo 2023', '../assets/loveagaincarrusel.jpg'),
    new Peliculas(9, "Vaya Vacaciones", 'Manuela y José quieren mucho a sus hijos y, sobre todo, idolatran a sus nietos. Pero los padres de estos han tomado por costumbre dejar a sus retoños al cuidado de sus abuelos, día sí y día también. Manuela y José ya no recuerdan la última vez que tuvieron un rato para ellos mismos.', 'Víctor García León', 'Ramón Barea, Ernesto Sevilla, Toni Acosta, Tito Valverde, Nuria Herrero, Daniela Rubio', '1h 30min', 'COMEDIA', '21 Abril 2023', '../assets/vayavacacionescarrusel.jpg')
  ];
  offers = [
    { id: 1, name: "¡BLACK FRIDAY EN PICTURE KINGDOM!", image: '../assets/BANNER-PDF-ENTRADA-BLACK-FRIDAY.jpg', price: "9.99" },
    { id: 2, name: "¡Únete al Reino VIP de Picture Kingdom!", image: '../assets/bannner-promo1.jpg', price: "19.99" },
    { id: 3, name: "¡Consigue una entrada al cine al comprar paquetes de Popitas!", image: '../assets/venta_fb.jpg', price: "14.99" }
  ];

  getOffers(): any[] {
    return this.offers;
  }
  getPeliculas():Peliculas[] {
    return this.peliculas
  }
  rellenarVentas(params: any) {
    this.ventas.push(params);
  }

  obtenerVentas(): any[] {
    return this.ventas;
  }
  vaciarVentas() {
    this.ventas = [];
  }
    constructor() { }
}
