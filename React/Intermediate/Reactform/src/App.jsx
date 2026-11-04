import React from "react";
import { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // // console.log(firstName, lastName);

  // function changeFirstNameHandler(event) {
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  console.log(formData);
  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

function submitHandler(event) {
  event.preventDefault();
  console. log("Form submitted");
  console.log(formData);
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your First name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <input
          type="text"
          placeholder="Enter your Last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <input
          type="email"
          placeholder="Enter your Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <textarea
          type=""
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <div>
          <input
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
          />

          <label htmlFor="isVisible"> Am i visible</label>
        </div>

        <fieldset>
          <legend>Mode: </legend>
          <div>
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="online"
              id="Online-Mode"
              checked={formData.mode === "online"}
            />
            <label htmlFor="Online-Mode"> Online Mode </label>

            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="offline"
              id="Offline-Mode"
              checked={formData.mode === "offline"}
            />
            <label htmlFor="Offline-Mode"> Offline Mode </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor="favCar"> Tell me your favourite car  </label>
          <select
            onChange={changeHandler}
            name="favCar"
            id="favCar"
            value={formData.favCar}
          >
            <option value="">Choose car</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="mercedes">Mercedes</option>
            <option value="ferrari">Ferrari</option>
            <option value="lamborghini">Lamborghini</option>
          </select>
        </div>

        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default App;
