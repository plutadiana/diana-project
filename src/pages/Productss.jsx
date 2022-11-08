import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import server from "./../server.json";
import Context from '../store/context';

export function Products() {
  const [dogs] = useState(server.dogs);
  const { addProduct } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        {dogs.map((dog, index) => {
          const handleClick = e => {
            addProduct(dog.id);
            alert(`${dog.title} a fost adaugat cu succes in cos.`);
          };
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index} >
              <Card
                style={{ width: "18rem" }}
                className="m-auto mt-3"
              >
                <Link
                  to={`/product/${encodeURI(dog.id)}`}
                  className="text-dark"
                >
                  <Card.Img variant="top" src={dog.img} />
                  <Card.Body>
                    <Card.Title>{dog.title}</Card.Title>
                    <Card.Title className="Title-Product"></Card.Title>
                    <Card.Text>Informatie: {dog.text}</Card.Text>
                  </Card.Body>
                </Link>
                <Button className="m-3" variant="outline-warning" onClick={handleClick}>Adoptă</Button>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
