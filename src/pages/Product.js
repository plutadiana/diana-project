import { useState } from "react";
import { useParams } from "react-router-dom";
import server from "./../server.json";
import { Link } from "react-router-dom";

export function Product() {
  // Preluam parametrul din URL.
  let { id } = useParams();
  // In url, id-ul este codificat cu functia encodeURI. Il decodam.
  id = decodeURI(id);

  const [product] = useState(server.dogs.find(dog => dog.id === id));

  return (
    // Afisam datele despre produs pe ecran.
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <img src={product.img} alt={product.title} />
          <h1 className="mt-4">{product.title}</h1>
        </div>
      </div>

      <div className="text-center mb-3">
        <Link to="/products">Vezi toate produsele</Link>
      </div>
    </div>
  );
}
