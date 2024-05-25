import SideImage from "../sideImage/sideImage";
export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between bg-white border shadow-md p-4">
      <h1 className="  text-4xl text-blue-900 font-serif">
        Local Shelter <span className=" text-orange-600">Donation</span>{" "}
        Inventory
      </h1>
      <div className="mt-1">
        <SideImage />
      </div>
    </div>
  );
}
