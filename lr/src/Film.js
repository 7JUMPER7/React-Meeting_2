import Actor from "./Actor";
import './Film.css'

export default function Film(props) {
    const {title, director, year, actors, studio, poster} = props.film;
    return(
        <div className='film'>
        <div className="info">
            <h2>{title}</h2>
            <h5>{year}</h5>
            <p><strong>Режиссер: </strong>{director}</p>
            <p><strong>Студия: </strong>{studio}</p>
            <ul><strong>В ролях:</strong>
                {actors.map(item => {
                    return(
                        <li><Actor name={item.name}></Actor></li>
                    );
                })}
            </ul>
        </div>
        <img src={poster} alt={title}/>
        </div>
    );
}