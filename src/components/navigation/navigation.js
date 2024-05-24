import SideImage from "../sideImage/sideImage";
export default function NavigationBar() {
  return (
    <div className="flex  flex-wrap place-content-center  bg-white border shadow-md justify-evenly">
      <h1 className="  ml-2 mt-14 text-4xl mr-20 text-blue-900 font-serif text-justify">
        Local Shelter Donation Inventory
      </h1>
      <div className="mt-1">
        <SideImage />
      </div>
    </div>
  );
}
