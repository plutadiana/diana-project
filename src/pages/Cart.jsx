
import { useContext } from 'react';
import Context from '../store/context';
import server from "./../server.json";
import Button from "react-bootstrap/Button";

export function Cart() {
  const { products } = useContext(Context);

  const selectedDogsInCart = server.dogs.filter(dog => products.includes(dog.id));
  return (
    <div>
      {selectedDogsInCart.length ? selectedDogsInCart.map(product => {
        const { id, title, img, text } = product;
        const handleClick = () => {
          alert(`${title} este deja rezervat.`);
        };

        return (
          <div className="my-3 text-center" key={id}>
            <img src={img} />
            <h1>{title}</h1>
            <h6>{text}</h6>
            <Button className="m-3" variant="warning" onClick={handleClick}>Adoptă acum!</Button>
          </div>
        );
      }) : (
        <h2 className='w-100 text-center'>Nu ai produse in cos.</h2>
      )}
    </div>
  );
}
