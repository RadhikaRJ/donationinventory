import Form from "../form/form";
import DonationRecords from "../Records/records";
import NavigationBar from "../navigation/navigation";

export default function HomePage() {
  let data = [
    {
      name: "Joe",
      donationType: "money",
      quantity: "0",
      amount: "200",
      date: "07/07/2023",
    },
    {
      name: "Sara",
      donationType: "food",
      quantity: "1",
      amount: "0",
      date: "07/07/2023",
    },
    {
      name: "Kim",
      donationType: "clothes",
      quantity: "2",
      amount: "0",
      date: "07/07/2023",
    },
  ];
  return (
    <div className="bg-blue">
      <NavigationBar />

      <div className="m-1 p-1 place-content-center flex flex-wrap justify-around w-full h-full ">
        <Form />
        {data.length == 0 ? (
          <p>There are no records available for display.</p>
        ) : (
          <DonationRecords data={data} />
        )}
      </div>
    </div>
  );
}
