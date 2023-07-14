import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState, useMemo } from "react";
import { getProducts, saveProducts } from "../../services/products";
import { BsTrash, BsArrowBarLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const productTotal = useMemo(() => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.count;
    }
    console.log(total);
    return total.toFixed(4);
  }, [cartItems]);

  const removeProduct = (id) => {
    const newItems = [...cartItems];
    const index = newItems.findIndex((value) => value.id === id);
    newItems.splice(index, 1);
    setCartItems(newItems);
    saveProducts(newItems);
  };

  const handleClick = (number, product) => {
    if (number < 0 && product.count === 1) return;

    const newProduct = { ...product };
    newProduct.count += number;
    const index = cartItems.findIndex((value) => value.id === product.id);
    const newItems = [...cartItems];
    newItems[index] = newProduct;
    setCartItems(newItems);
    saveProducts(newItems);
  };

  useEffect(() => {
    const product = getProducts();
    setCartItems((previusProduct) => {
      const newProducts = product
        .filter(
          (value) => !previusProduct.some((product) => product.id === value.id)
        )
        .map((value) => ({
          ...value,
          count: 1,
        }));

      return [...newProducts, ...previusProduct];
    });
  }, []);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body d-flex">
                        <Link className="nav-link ms" to="/">
                          <BsArrowBarLeft className="me-3" />
                          Continue Comprando
                        </Link>
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Carrinho</p>
                        <p className="mb-0">
                          Você tem {cartItems.length} items no seu carrinho
                        </p>
                      </div>
                    </div>
                    {cartItems.map((products, productsIndex) => (
                      <MDBCard className="mb-3" key={productsIndex}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={products.imagen}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  {products.title}
                                </MDBTypography>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0 d-flex justify-content-center"
                                >
                                  <button
                                    className="bg-transparent border-0"
                                    onClick={() => handleClick(-1, products)}
                                  >
                                    -
                                  </button>
                                  {products.count}
                                  <button
                                    className="bg-transparent border-0"
                                    onClick={() => handleClick(1, products)}
                                  >
                                    +
                                  </button>
                                </MDBTypography>
                              </div>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  {products.price}
                                </MDBTypography>
                              </div>
                              <a
                                href="#!"
                                style={{ color: "#cecece" }}
                                onClick={() => removeProduct(products.id)}
                              >
                                <BsTrash />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Detalhes do cartão
                          </MDBTypography>
                        </div>
                        <form className="mt-4">
                          <MDBInput
                            className="mb-4"
                            label="Nome no cartão"
                            type="text"
                            size="lg"
                            placeholder="Nome no cartão"
                            contrast
                          />

                          <MDBInput
                            className="mb-4"
                            label="Numero do cartão"
                            type="text"
                            size="lg"
                            minLength="19"
                            maxLength="19"
                            placeholder="1234 5678 9012 3457"
                            contrast
                          />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Data de expiração"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/YYYY"
                                contrast
                              />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                contrast
                              />
                            </MDBCol>
                          </MDBRow>
                        </form>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total</p>
                          <p className="mb-2">R$ {productTotal}</p>
                        </div>
                        <Button variant="info" size="lg">
                        <div className="d-flex justify-content-between">
                            <span>R$ {productTotal} &nbsp;</span>
                            <span>Finalizar</span>
                          </div>
                        </Button>{" "}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
