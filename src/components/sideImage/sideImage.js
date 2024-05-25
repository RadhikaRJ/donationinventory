import supportShelterImg from "../../assets/images/supportShelter.png";

export default function SideImage() {
  return (
    <div className="">
      <div className="rounded-lg">
        <img
          className="h-48 w-48 object-cover rounded-lg"
          src={supportShelterImg}
          alt="local shelter support"
        />
      </div>
    </div>
  );
}
