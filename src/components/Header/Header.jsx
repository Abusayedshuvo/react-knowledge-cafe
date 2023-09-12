import profileImg from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-5 border-b-2">
        <h1 className="text-4xl font-semibold">Knowledge Cafe</h1>
        <img src={profileImg} alt="" />
      </div>
      ;
    </div>
  );
};

export default Header;
