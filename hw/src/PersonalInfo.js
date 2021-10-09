import Photo from "./Photo";
import './PersonalInfo.css'

export default function PersonalInfo(props) {
    const {name, phone, email, city, experience, skills, photos} = props.person;
    return(
        <>
        <h2>{name}</h2>
        <p><strong>Phone: </strong>{phone}</p>
        <p><strong>Email: </strong>{email}</p>
        <p><strong>City: </strong>{city}</p>
        <p><strong>Experience: </strong>{experience} years</p>
        <ul><strong>Skills:</strong>
            {skills.map((item, index) => {
                return(
                    <li key={index}>{item} years</li>
                );
            })}
        </ul>
        <div className="photos">
            {photos.map((item, index) => {
                return(
                    <Photo key={index} path={item} alt={`${name} ${index}`}></Photo>
                )
            })}
        </div>
        </>
    );
}