import { Link, useLocation } from "react-router-dom";
import { MAIN_ROUTES } from "src/constants";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={` bg-[#363740] w-64`}>
      <nav>
        <ul className="mt-4">
          {MAIN_ROUTES.map((route) => (
            <li
              key={route.label}
              className={`p-4 ps-10 flex gap-6 ${location.pathname === route.path ? "border-s-4 border-[#DDE2FF] bg-[#9FA2B4] bg-opacity-10" : ""}`}
            >
              <img src={route.icon} alt={route.label} />
              <Link to={route.path} className="text-[#A4A6B3] ">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
