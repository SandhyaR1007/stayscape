import Search from "./Search";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 border-b shadow-sm">
      <section className="flex items-center gap-1">
        {" "}
        <img
          className="w-10"
          src="https://cdn.icon-icons.com/icons2/2845/PNG/512/airbnb_logo_icon_181363.png"
          alt="logo"
        />
        <span className="text-emerald-500 font-semibold text-lg">
          StayScape
        </span>
      </section>
      <section>
        <Search />
      </section>
      <section>UserInfo</section>
    </nav>
  );
};

export default Header;
