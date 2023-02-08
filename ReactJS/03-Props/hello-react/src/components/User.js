function User({ name, surname, age, isLoggedIn, friends }) {
  const friendObjs = [
    { id: 1, name: "Ahmet" },
    { id: 2, name: "Tayfun" },
    { id: 3, name: "Gökhan" },
  ];

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
      {friendObjs.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </div>
  );
}

export default User;
