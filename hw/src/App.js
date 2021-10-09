import './App.css';
import PersonalInfo from './PersonalInfo';
import Pet from './Pet';
import img1 from './Photos/1.jpeg';
import img2 from './Photos/2.jpeg';
import petImage from './Photos/PetImage.jpeg'

function App() {
  const person = {
    name: 'Arsenii Semenov',
    phone: '+380633520643',
    email: '2014.semenow.senya@gmail.com',
    city: 'Kriviy Rih',
    experience: 2,
    skills: [
      'C++', 
      'C#', 
      'SQL', 
      'HTML', 
      'CSS', 
      'JS', 
      'Angular', 
      'React', 
      'Python'
    ],
    photos: [
      img1,
      img2,
    ]
  };

  const pet = {
    name: 'Буся',
    age: 5,
    photo: petImage
  }

  return (
    <div className="App">
      <h1>Ex 1</h1>
      <PersonalInfo person={person}></PersonalInfo>
      <h1>Ex 2</h1>
      <Pet name={pet.name} age={pet.age} image={pet.photo}></Pet>
    </div>
  );
}

export default App;
