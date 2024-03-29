import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <h1>`Giriş yapmadiniz`</h1>;
  }

  return (
    <div>
      <h1>{`${name} ${surname}  ${age}`}</h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </div>
  );
}

User.protoTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  name: "No name",
  isLoggedIn: false,
};

export default User;
