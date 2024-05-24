import supportShelterImg from "../../assets/images/supportShelter.png";

export default function SideImage() {
  return (
    <div className="">
      <div className="rounded">
        <img
          className="h-48 w-50 align-middle rounded-lg"
          src={supportShelterImg}
          alt="local shelter support"
        />
      </div>
    </div>
  );
}
