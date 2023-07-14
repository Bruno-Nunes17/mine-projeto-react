
export const saveProducts =  (Products) =>{
  localStorage.setItem("Products", JSON.stringify(Products));
}

export const getProducts =  () => {
  return JSON.parse(localStorage.getItem("Products")) || [];
};

export const saveProduct =  (product) => {
  const products =  getProducts();
  const newProduct = {...product};
  products.push(newProduct);
   saveProducts(products);
  return newProduct;
};

export const Products = () => {
  return [
    {
      id: "123",
      title: " Apple Phone Pro Max",
      imagen: 'https://raw.githubusercontent.com/Bruno-Nunes17/image/main/D_NQ_NP_605126-MLM51559383638_092022-O.png',
      price: 8.215 ,
    },
    {
        id: "456",
        title: "Samsung Galaxy S23 Ultra",
        imagen: "https://raw.githubusercontent.com/Bruno-Nunes17/image/main/D_NQ_NP_888265-MLA70240026373_062023-O.png",
        price: 6.599,
      },
      {
        id: "789",
        title: "Apple notebook MacBook Air ",
        imagen: "https://raw.githubusercontent.com/Bruno-Nunes17/image/main/9fa7d0ee448f7dcaf3c0cb9557ae1d15.png",
        price: 7.997,
      },
      {
        id: "10",
        title: "CANON 7535 Câmera Dslr Eos 6D Mark Ii",
        imagen: "https://raw.githubusercontent.com/Bruno-Nunes17/image/main/71%2Bqi5lPPUL._AC_UF894%2C1000_QL80_.jpg",
        price: 15.353,
      },
    
  ];
};
