import Photo from "./Photo";

export default function Pet(prop) {
    return(
        <>
        <h2>Кличка: {prop.name}</h2>
        <p><strong>Возраст: </strong>{prop.age} лет</p>
        <Photo path={prop.image} alt={prop.name}></Photo>
        </>
    );
}