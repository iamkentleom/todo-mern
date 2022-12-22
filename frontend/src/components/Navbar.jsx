import moment from "moment";

const Navbar = () => {
  return (
    <nav className="py-4">
      <p className="text-5xl font-bold text-emerald-600">todo</p>
      <p className="font-semibold">{moment().format("MMMM DD, YYYY")}</p>
    </nav>
  );
};

export default Navbar;
