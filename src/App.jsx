import React, { useState } from "react";
import Styles from "./App.module.css";
import Logo from "./assets/FoodieLogo.png";
import Mobile from "./Components/Mobile";

function App() {
  const [input, setInput] = useState({
    Name: "",
    Phone: "",
    City: ""
  });
  const [show, setShow] = useState(false);

  const handelClick = () =>{
    if(input.Name !== "" && input.Phone !== "" && input.City !== ""){
      setShow(true);
    }else{
      alert("Please Fill all the Fields!!")
    }
  }
  const day = new Date();
  const YEAR = day.getFullYear();


  return (
    <>
      <nav className={Styles.navbar}>
        <img src={Logo} alt="Logo" className={Styles.Logo} />
        <button className={Styles.Button}>Join the Waitlist</button>
      </nav>
      {/*  */}
      <section className={Styles.Body}>
        <div className={Styles.content}>
          {/*  */}
          <Mobile />
          {/*  */}

          <div className={Styles.details}>
            <img src={Logo} alt="Logo" className={Styles.SmallLogo} />
            <h1>Welcome to Foodie</h1>
            <p>At Foodie, we redefine convenience with our seamless food delivery service. Whether you're craving the flavors of home or exploring new culinary delights, Foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners and everything in between, our curated menu caters to every palate and preference.</p>
            <button className={Styles.DButton}>Join the Waitlist</button>
          </div>
        </div>
      </section>

      {/*  */}

      <section className={Styles.form}>
        <h1>Join the Waitlist</h1>
       {show ? (<h1>Thank you</h1>) : (<div className={Styles.Flex}>
          <input type="text" placeholder="Name" className={Styles.input} onChange={(e) => setInput({...input, Name: e.target.value})} />
          <input type="text" placeholder="Phone" className={Styles.input} onChange={(e) => setInput({...input, Phone: e.target.value})}  />
          <input type="text" placeholder="City" className={Styles.input} onChange={(e) => setInput({...input, City: e.target.value})}  />
        </div>)}
        { show === false && <button className={Styles.DButton2} onClick={handelClick}>Join the Waitlist</button>}
      </section>
      <footer className={Styles.footer}>
        <p>©Foodie, {YEAR}</p>
      </footer>

    </>
  );
}

export default App;
