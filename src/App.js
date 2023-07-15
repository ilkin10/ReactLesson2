// import Profile from './Profile';
// import Todo from './Todo';
// import Item from './Item';

// import Info from "./Info";
// import UserImage from "./UserImage";


import Product from "./Product";

const person = {
  name: "Elvin",
  age: 25,
  avatar:
    "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
};

const produtcs = [
  {
    name: "apple",
    price: 1200,
    avatar: "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
  },
  {
    name: "acer",
    price: 1763,
    avatar: "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
  },
  {
    name: "samsung",
    price: 4432,
    avatar: "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
  },
];

function App() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between"
    }}>
      {/* <Todo></Todo> */}
      {/* <Profile></Profile> */}
      {/* <Item></Item> */}
      {/* <UserImage name={person.name} avatar={person.avatar}></UserImage>
      <Info person={person}></Info> */}

      <Product size={100} product={produtcs[0]}></Product>
      <Product size={150} product={produtcs[1]}></Product>
      <Product size={200} product={produtcs[2]}></Product>


    </div>
  );
}

export default App;
