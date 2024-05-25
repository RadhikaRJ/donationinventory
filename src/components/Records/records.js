/**
 *
 *
 *
 * * Donation List: Display a list of recorded donations with their details.
 * Include way to edit or delete a donation from the list.
 */

import React, { useEffect, useState } from "react";

import EditSharpIcon from "@mui/icons-material/EditSharp";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function DonationRecords({ data: initialData }) {
  const [editableRows, setEditableRows] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const initialEditableRows = {};
    initialData.forEach((person) => {
      initialEditableRows[person.id] = { ...person, isEditable: false };
    });

    setEditableRows(initialEditableRows);
    setData(initialData);
  }, [initialData]);

  const toggleEditMode = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isEditable: !prevState[id].isEditable,
      },
    }));
  };

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    setEditableRows((prevData) => ({
      ...prevData,
      [id]: { ...prevData[id], [field]: value },
    }));
  };

  const handleSave = (id) => {
    //send updated row data to backend data using axios
    const updatedRow = editableRows[id];
    if (
      updatedRow.name &&
      updatedRow.donationType &&
      updatedRow.quantity &&
      updatedRow.amount &&
      updatedRow.date
    ) {
      axios
        .put(`http://localhost:3000/donations/${id}`, updatedRow)
        .then((response) => {
          console.log("Data updated sucessfully", response.data);
          setEditableRows((prevState) => ({
            ...prevState,
            [id]: {
              ...prevState[id],
              ...response.data,
              isEditable: false,
            },
          }));
          setData((prevData) =>
            prevData.map((person) =>
              person.id === id ? { ...response.data } : person
            )
          );
        })
        .catch((error) => {
          console.error("Error updating data", error);
        });
    } else {
      console.error("All fields must be populated before saving.");
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/donations/${id}`)
      .then((response) => {
        console.log("Data deleted successfully", response.data);
        setData((prevData) => prevData.filter((person) => person.id != id));
        setEditableRows((prevState) => {
          const newState = { ...prevState };
          delete newState[id];
          return newState;
        });
      })
      .catch((error) => {
        console.error("Error deleting data", error);
      });
  };

  return (
    <div className=" m-4 shadow-lg rounded-lg p-4 font-serif  border bg-white">
      <h1 className="font-bold tracking-wider p-2 m-2  text-blue-900 font-serif">
        DONOR LIST
      </h1>
      <div>
        <table className=" p-2  border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="tracking-wider ">
              <th className="font-thin m-2 p-2  border border-blue-700  bg-blue-500 text-white">
                Name
              </th>
              <th className="font-thin m-2 p-2 border border-blue-700  bg-blue-500 text-white">
                Type of donation
              </th>
              <th className="font-thin m-2 p-2 border border-blue-700  bg-blue-500 text-white">
                Quantity
              </th>
              <th className="font-thin m-2 p-2 border border-blue-700  bg-blue-500 text-white">
                Amount
              </th>
              <th className="font-thin m-2 p-2 border border-blue-700  bg-blue-500 text-white">
                Date
              </th>
              <th className="font-thin m-2 p-2 border border-blue-700  bg-blue-500 text-white"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => {
              const { isEditable } = editableRows[person.id] || {};
              return (
                <tr key={person.id}>
                  <td className="  m-2 p-2 border border-slate-700">
                    {isEditable ? (
                      <input
                        type="text"
                        value={editableRows[person.id]?.name || ""}
                        onChange={(e) =>
                          handleInputChange(e, person.id, "name")
                        }
                      />
                    ) : (
                      person.name
                    )}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {isEditable ? (
                      <input
                        type="text"
                        value={editableRows[person.id]?.donationType || ""}
                        onChange={(e) =>
                          handleInputChange(e, person.id, "donationType")
                        }
                      />
                    ) : (
                      person.donationType
                    )}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {isEditable ? (
                      <input
                        type="number"
                        value={editableRows[person.id]?.quantity || ""}
                        onChange={(e) =>
                          handleInputChange(e, person.id, "quantity")
                        }
                      />
                    ) : (
                      person.quantity
                    )}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {"$"}
                    {isEditable ? (
                      <input
                        type="number"
                        value={editableRows[person.id]?.amount || ""}
                        onChange={(e) =>
                          handleInputChange(e, person.id, "amount")
                        }
                      />
                    ) : (
                      person.amount
                    )}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {isEditable ? (
                      <input
                        type="date"
                        value={editableRows[person.id]?.date || ""}
                        onChange={(e) =>
                          handleInputChange(e, person.id, "date")
                        }
                      />
                    ) : (
                      person.date
                    )}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {isEditable ? (
                      <>
                        <SaveIcon
                          color="primary"
                          onClick={() => handleSave(person.id)}
                        />
                      </>
                    ) : (
                      <>
                        <EditSharpIcon
                          color="secondary"
                          onClick={() => toggleEditMode(person.id)}
                        />
                        <DeleteIcon
                          color="error"
                          onClick={() => handleDelete(person.id)}
                        />
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
