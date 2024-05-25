/**
 *
 * * Donation input Form:
 * Create a form where users can input details of a donation.
 * Fields to include:
 * donor's name,
 * type of donation(money, food, clothing, etc.),
 * quantity or amount donated,
 * and the date of the donation.
 */

import React, { useState } from "react";
import axios from "axios";

export default function Form({ addNewDonation }) {
  const [formData, setFormData] = useState({
    name: "",
    donationType: "",
    quantity: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/donations", formData)
      .then((response) => {
        console.log("Data submitted successfully", response.data);
        addNewDonation(response.data);
        setFormData({
          //reset the form data
          name: "",
          donationType: "",
          quantity: "",
          amount: "",
          date: "",
        });
      })
      .catch((error) => {
        console.log("There was error submitting the data!", error);
      });
  };

  return (
    <div className=" shadow-lg rounded-md w-fit font-serif m-2 p-1 border bg-white">
      <h3 className="font-bold tracking-wider p-1 m-1 text-blue-900 font-serif">
        Donor <span className=" text-orange-600">&</span> Donation Details Form
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-1  rounded-md p-1 "
      >
        <div className="flex flex-wrap  justify-between m-1">
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="name" className="mr-2 text-sm text ">
              {" "}
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border ps-1 text-sm"
              placeholder=" Enter your full name"
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="donationType" className=" mr-2 text-sm ">
              {" "}
              Type of donation
            </label>

            <input
              type="text"
              id="donationType"
              className=" border ps-1 text-sm"
              placeholder=" (food, clothes, etc)"
              onChange={handleChange}
              value={formData.donationType}
            ></input>
          </div>
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="quantity" className="mr-2 text-sm">
              {" "}
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="border ps-1 text-sm"
              placeholder="Enter the quantity"
              onChange={handleChange}
              value={formData.quantity}
            ></input>
          </div>
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="amount" className="  mr-2   text-sm">
              {" "}
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="border ps-1 text-sm"
              placeholder="Enter Amount S"
              onChange={handleChange}
              value={formData.amount}
            ></input>
          </div>
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="dt" className="mr-2 text-left text-sm">
              Date
            </label>
            <input
              id="date"
              type="date"
              className=" border ps-1 text-sm"
              onChange={handleChange}
              value={formData.date}
            ></input>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="border rounded-md text-sm p-2 shadow-lg border-orange-400 bg-orange-400 text-white"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
