import React from "react";

function Header({ number, data }) {
  console.log("Header component re-rendered.");
  return (
    <div>
      Header - {number}
      <br />
      <br />
      <code>{JSON.stringify(data)}</code>
      <hr />
    </div>
  );
}

export default React.memo(Header);
