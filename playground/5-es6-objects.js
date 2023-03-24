//Object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

//Object destructing

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

//const label = product.label
//const stock = product.stock
// const { label, stock, rating } = product;
// console.log(label);
// console.log(stock);
// console.log(rating);

//change variable name
// const { label: productLabel, stock, rating } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

//set deafult value if no key is there
const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock, rating = 5 }) => {
  console.log(label);
  console.log(stock);
  console.log(rating);
};

transaction("order", product);
