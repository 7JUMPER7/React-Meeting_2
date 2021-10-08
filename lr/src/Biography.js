import Creation from "./Creation";

export default function Biography(props) {
    const {name, birthday, creations} = props.person;
    return(
        <>
        <h2>{name}</h2>
        <p>Дата рождения: {birthday}</p>
        <ul>
            {creations.map(item => {
                return(
                    <Creation key={item.title} title={item.title} date={item.date}></Creation>
                )
            })}
        </ul>
        </>
    );
}