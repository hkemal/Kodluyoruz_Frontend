import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends }) {
  // return (
  //   <div>
  //     <h1>{isLoggedIn ? `${name} ${surname}  ${age}` : `Giriş yapmadiniz`}</h1>
  //     {friends.map((friend, index) => (
  //       <div key={index}>{friend}</div>
  //     ))}
  //   </div>
  // );

  return (
    <div>
      <h1>{isLoggedIn ? `${name} ${surname}  ${age}` : `Giriş yapmadiniz`}</h1>
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </div>
  );
}

User.protoTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.number,
  friends: PropTypes.array,
};

export default User;
