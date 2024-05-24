/**
 *
 *
 *
 * * Donation List: Display a list of recorded donations with their details.
 * Include way to edit or delete a donation from the list.
 */

import Icon from "@mui/material/Icon";
import EditSharpIcon from "@mui/icons-material/EditSharp";

<Icon>star</Icon>;

export default function DonationRecords({ data }) {
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
          {data.map((person) => {
            return (
              <tbody>
                <tr>
                  <td className="  m-2 p-2 border border-slate-700">
                    {person.name}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {person.donationType}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {person.quantity}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {"$"}
                    {person.amount}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    {person.date}
                  </td>
                  <td className=" m-2 p-2 border border-slate-700">
                    <EditSharpIcon color="secondary" />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
