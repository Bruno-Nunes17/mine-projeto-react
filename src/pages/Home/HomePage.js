import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "../../Components/Card/Card";
import { Products, saveProduct } from "../../services/products";

export const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        {Products().map((products, productsIndex) => (
          <Col xs={12} md={3} key={productsIndex}>
            <Card {...products} onClick={() => saveProduct(products)}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
