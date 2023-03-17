import './App.css';

function MyButton() {
  
  function handleClick(){
    alert("Clicked button?");
  }

  return (
    <button onClick = {handleClick}>
      Click me!
    </button>
  );
}

const products = [
  { title: 'Cabbage', id: 1, isFruit: false },
  { title: 'Garlic', id: 2, isFruit: false },
  { title: 'Apple', id: 3, isFruit: true },
];

const listItems = products.map(product =>
  <li key = {product.id}
    style={{
      color: product.isFruit ? 'green' : 'red'
    }}
  >
    {product.title}
  </li>
  );

export default function MyApp(){
  return(
    <div className='bg-window'>
    <ul>{listItems}</ul>
    <MyButton />
    </div>
  )
};
