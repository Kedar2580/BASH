import React from "react";
import { useState } from "react";

const App = () => {
  // this are the state to hold the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  // callback function to handle the change in form inputs
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // callback function to handle the form submission
  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex   items-center justify-center   mt-2">
      {/* <form className="flex flex-col  w-1/2" onSubmit={submitHandler} id="form"> */}
      <form className="form " onSubmit={submitHandler}>
        <br />
        {/* Personal Information */}
        <fieldset id="personalInfo">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
          <br />
          <label htmlFor="Country">Country</label>
          <select
            name="Country"
            id="Country"
            value={formData.Country}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          >
            {/* <label htmlFor="Country">Country</label> */}
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
          <br />
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="Enter your street address"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
          <br />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
          <br />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
          <br />
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="110092"
            value={formData.postalCode}
            onChange={changeHandler}
            className="border-2 border-gray-300 rounded-md"
          />
        </fieldset>

        {/* Email Notifications */}
        <br />
        <fieldset id="emailNotification">
          <legend>By Email</legend>
          <div>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />

            <label htmlFor="comments"> Comments</label>
            <p> Get notified when someone posts a comment on a posting.</p>
          </div>

          <div>
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />

            <label htmlFor="candidates"> Candidates</label>
            <p> Get notified when a candidate applies for a job.</p>
          </div>

          <div>
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />

            <label htmlFor="offers"> Offers</label>
            <p> Get notified when a candidate applies for a job.</p>
          </div>
        </fieldset>

        {/* Push Notifications */}
        <br />
        <fieldset id="pushNotification">
          <legend>Push Notifications</legend>
          <p> These are delivered via SMS to your mobile phone.</p>
          <div>
            <input
              type="radio"
              name="pushNotification"
              id="pushEverything"
              value="everything"
              checked={formData.pushNotification === "everything"}
              onChange={changeHandler}
            />

            <label htmlFor="pushEverything"> Everything</label>
            {/* <p> Get all notifications.</p> */}
          </div>

          <div>
            <input
              type="radio"
              name="pushNotification"
              id="pushEmail"
              value="same as email"
              checked={formData.pushNotification === "same as email"}
              onChange={changeHandler}
            />

            <label htmlFor="pushEmail"> Same as email</label>
            {/* <p> Receive the same notifications as email.</p> */}
          </div>

          <div>
            <input
              type="radio"
              name="pushNotification"
              id="pushNothing"
              value="No push notifications"
              checked={formData.pushNotification === "No push notifications"}
              onChange={changeHandler}
            />

            <label htmlFor="pushNothing"> No push notifications</label>
            {/* <p> Receive no push notifications.</p> */}
          </div>
        </fieldset>

        {/* Save button */}
        <br />
        <div>
          <button
            type="submit"
            onSubmit={submitHandler}
            className=" py-2 px-4 flex rounded text-white bg-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
