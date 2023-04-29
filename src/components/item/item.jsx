export default function Item({name, price, id, isValided}) {
    console.log(name);
    return (
       <div key={id}>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{isValided}</p>
       </div>
    )
}