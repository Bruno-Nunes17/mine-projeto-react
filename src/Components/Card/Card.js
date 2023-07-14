import Button from "react-bootstrap/Button";
import CardBS from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Card = ({id,title, imagen, price, onClick}) => {
  return (
    <CardBS>
      <CardBS.Img className="p-4" variant="top" src={imagen} />
      <CardBS.Body>
        <CardBS.Title className="text-center">{title}</CardBS.Title>
        <CardBS.Text className="text-center">
          R$ {price}
        </CardBS.Text>
        <div className="d-flex justify-content-center">
        <Button variant='outline-success' onClick={onClick}><Link className="nav-link" to='/cart'>COMPRAR</Link></Button>
        </div>
      </CardBS.Body>
    </CardBS>
  );
};
