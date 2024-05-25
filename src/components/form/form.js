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
    <div className=" shadow-lg rounded-md w-full lg:w-1/2 font-serif m-4 mt-0 p-4 border bg-white">
      <h3 className="font-bold tracking-wider p-2 text-blue-900 text-center">
        Donor <span className=" text-orange-600">&</span> Donation Details Form
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className="flex flex-wrap  justify-between">
          <div className="flex flex-col p-2 w-full">
            <label for="name" className=" text-left text-sm mb-1">
              {" "}
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border p-2 text-sm rounded"
              placeholder=" Enter your full name"
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col p-2 w-full">
            <label for="donationType" className="text-left text-sm mb-1 ">
              {" "}
              Type of donation
            </label>

            <input
              type="text"
              id="donationType"
              className="border p-2 text-sm rounded"
              placeholder=" (food, clothes, etc)"
              onChange={handleChange}
              value={formData.donationType}
            ></input>
          </div>
          <div className="flex flex-col p-2 w-full">
            <label for="quantity" className=" text-left text-sm mb-1">
              {" "}
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="border p-2 text-sm rounded"
              placeholder="Enter the quantity"
              onChange={handleChange}
              value={formData.quantity}
            ></input>
          </div>
          <div className="flex flex-col p-2 w-full">
            <label for="amount" className=" text-left text-sm mb-1">
              {" "}
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="border p-2 text-sm rounded"
              placeholder="$"
              onChange={handleChange}
              value={formData.amount}
            />
          </div>
          <div className="flex flex-col p-2 w-full">
            <label for="dt" className=" text-left text-sm mb-1">
              Date
            </label>
            <input
              id="date"
              type="date"
              className=" border p-2 text-sm rounded"
              onChange={handleChange}
              value={formData.date}
            ></input>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="mt-4 border rounded-md text-sm p-2 shadow-lg border-orange-400 bg-orange-400 text-white self-center"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
