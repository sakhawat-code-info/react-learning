export default function User({ user }) {
    const { name, address } = user;
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Email : {address.zipcode}</p>
        </div>
    )
}