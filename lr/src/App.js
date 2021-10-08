import './App.css';
import Biography from './Biography';
import Film from './Film';

function App() {
  let person = {
    name: 'Уильям Шекспир',
    birthday: '26 апреля 1564',
    creations: [
      {
        title: 'Ромео и Джульетта',
        date: '1595—1596'
      },
      {
        title: 'Гамлет',
        date: '1600—1601'
      },
      {
        title: 'Буря',
        date: '1611'
      }
    ]
  }

  let film = {
    title: 'Миссия невыполнима',
    director: 'Брайан Де Пальма,	Том Круз',
    year: 1996,
    actors: [
      {name: 'Том Круз'},
      {name: 'Джон Войт'},
      {name: 'Эммануэль Беар'},
    ],
    studio: 'Paramount Pictures, Cruise/Wagner Productions',
    poster: 'https://upload.wikimedia.org/wikipedia/ru/e/e1/MissionImpossiblePoster.jpg'
  }

  return (
    <div className="App">
      <h1>Ex 1</h1>
      <Biography person={person}></Biography>
      <h1>Ex 2</h1>
      <Film film={film}></Film>
    </div>
  );
}

export default App;
