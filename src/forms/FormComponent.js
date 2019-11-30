import React from "react";

const FormComponent = props => {
  return (
    <main>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
          />
          Female
        </label>
      </form>
      <br />

      <select
        name="destination"
        value={props.data.destination}
        onChange={props.handleChange}
      >
        <option value=""> ------Please choose a destionation------</option>
        <option value="germany">Germany</option>
        <option value="norway">Norway</option>
        <option value="sweden">Sweden</option>
        <option value="russia">Russia</option>
        <option value="spain">Spain</option>
      </select>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          name="isVegan"
          onChange={props.handleChange}
          checked={props.data.isVegan}
        />{" "}
        Vegan?
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="isKosher"
          onChange={props.handleChange}
          checked={props.data.isKosher}
        />{" "}
        Kosher?
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="isLactoseFree"
          onChange={props.handleChange}
          checked={props.data.isLactoseFree}
        />{" "}
        LactoseFree?
      </label>

      <hr />

      <div className="infoSec">
        <h1>Entered Information: </h1>
        <p>
          Your name: {props.data.firstName} {props.data.lastName}
        </p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destionation: {props.data.destination}</p>
        <h3>Your dietary restriction:</h3>
        <p>
          <br /> Vegan: {props.data.isVegan ? " Yes" : " No"}
          <br />
          Kosher: {props.data.isKosher ? " Yes" : " No"}
          <br />
          LactoseFree: {props.data.isLactoseFree ? " Yes" : " No"}
          <br />
        </p>
      </div>
      <div>
        <input type="checkbox" name="agreeInfo" onChange={props.handleChange} />{" "}
        I agree with all information
      </div>
      <br />
      <div>
        <button>Submit</button>
      </div>
    </main>
  );
};

export default FormComponent;
