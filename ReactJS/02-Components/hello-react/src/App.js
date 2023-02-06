import React from "react";
import "./App.css";
import Header from "./components/Header";

const name = "Mehmet";
const surname = "Seven";
const isLoggedIn = false;

function App() {
  // return React.createElement("div", null, "Hello");
  return (
    //Kapsayıcı bir etiket olması lazım, boş bir etiket de kullanabiliriz <> </>
    // <div>
    //   <h1>Hello React</h1>
    //   <Header />
    //   <p className="xyz">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ipsum
    //     officiis quidem sit aliquam id saepe vero, ea quasi sint quo excepturi
    //     obcaecati, optio in nisi adipisci incidunt reprehenderit modi!
    //   </p>
    //   <label htmlFor="myinput">
    //     Name <input id="myinput" />
    //   </label>
    // </div>
    <div>
      <h1>
        {isLoggedIn
          ? `Benim adim ${name} soyadim ${surname}`
          : "Giriş yapmadiniz"}
      </h1>
    </div>
  );
}

export default App;
