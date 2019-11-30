import React from "react";
import ContactCard from "./ContactCard";
let App = () => {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Mestan",
          imgUrl: "http://placekitten.com/500/100",
          phone: "(055) 3236852",
          email: "mestan1212@gmail.com"
        }}
        // name="Mr. Mestan"
        // imgUrl="http://placekitten.com/200/100"
        // phone="(055) 3236852"
        // email="mestan1212@gmail.com"
      />
      <ContactCard
        contact={{
          name: "Mr. Millo",
          imgUrl: "http://placekitten.com/400/400",
          phone: "(055) 5422852",
          email: "millo1212@gmail.com"
        }}
        // name="Mr. Millo"
        // imgUrl="http://placekitten.com/300/200"
        // phone="(055) 5422852"
        // email="millo1212@gmail.com"
      />
      <ContactCard
        contact={{
          name: "Mrs. Katty",
          imgUrl: "http://placekitten.com/200/200",
          phone: "(055) 4323252",
          email: "katty1212@gmail.com"
        }}
        // name="Mrs. Katty"
        // imgUrl="http://placekitten.com/400/200"
        // phone="(055) 4323252"
        // email="katty1212@gmail.com"
      />
      <ContactCard
        contact={{
          name: "Mrs. Lolly",
          imgUrl: "http://placekitten.com/300/300",
          phone: "(055) 5482545",
          email: "lolly1212@gmail.com"
        }}
        // name="Mrs. Lolly"
        // imgUrl="http://placekitten.com/200/300"
        // phone="(055) 5482545"
        // email="lolly1212@gmail.com"
      />
    </div>
  );
};

export default App;
