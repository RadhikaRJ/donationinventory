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

export default function Form() {
  return (
    <div className=" shadow-lg rounded-md w-fit font-serif m-2 p-1 border bg-white">
      <h3 className="font-bold tracking-wider p-1 m-1 text-blue-900 font-serif">
        FILL DONOR DETAILS
      </h3>
      <form className="flex flex-col m-1  rounded-md p-1 ">
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
            ></input>
          </div>
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="amount" className="  mr-2   text-sm">
              {" "}
              Amount
            </label>
            <input
              type="number"
              id="quantity"
              className="border ps-1 text-sm"
              placeholder="Enter Amount S"
            ></input>
          </div>
          <div className="flex p-1 m-2 justify-between flex-wrap">
            <label for="dt" className="mr-2 text-left text-sm">
              Date
            </label>
            <input id="dt" type="date" className=" border ps-1 text-sm"></input>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button className="border rounded-md text-sm p-2 shadow-lg border-orange-400 bg-orange-400 text-white">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
