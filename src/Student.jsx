export default function Student({ studentInfo }) {
    const { name, age } = studentInfo;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Name: {age}</p>
        </div>
    )
}