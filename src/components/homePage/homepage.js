import Form from "../form/form";
import DonationRecords from "../Records/records";
import NavigationBar from "../navigation/navigation";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/donations")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const addNewDonation = (newDonation) => {
    setData((prevData) => [...prevData, newDonation]);
  };
  return (
    <div className="bg-blue">
      <NavigationBar />

      <div className="m-4 p-4 flex flex-col lg:flex-row lg:space-x-4">
        <Form addNewDonation={addNewDonation} />
        {data.length == 0 ? (
          <p className="mt-4 text-gray-700 lg:mt-0">
            There are no records available for display.
          </p>
        ) : (
          <DonationRecords data={data} />
        )}
      </div>
    </div>
  );
}
