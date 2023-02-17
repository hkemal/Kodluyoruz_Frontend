import { useState } from "react";

import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        username: "John",
        bio: "lorem ipsum dolor",
      });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
