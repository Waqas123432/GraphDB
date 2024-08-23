import Sidebar from "src/components/Sidebar";
import { Routes, Route } from "react-router-dom";
import DataUpload from "src/pages/DataUpload";
import GraphNavigation from "src/pages/GraphNavigation";
import MyProcess from "src/pages/MyProcess";
import Namespace from "src/pages/Namespace";
import Settings from "src/pages/Settings";
import Sparql from "src/pages/Sparql";
import Statistics from "src/pages/Statistics";
import VectorIcon from "src/assets/vector.svg";
import UserIcon from "src/assets/user.svg";
import { MAIN_ROUTES } from "./constants";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-grow p-12 bg-[#FAFAFA]">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl text-[#252733]  font-mulish">
            {
              MAIN_ROUTES.find((route) => route.path === location.pathname)
                ?.label
            }
          </h2>
          <div className="flex mb-12">
            <div className="flex gap-2 items-center border-e-2 px-6">
              <p className="font-medium  font-montserrat text-[#737B7D] text-[14px]">
                English
              </p>
              <img
                className="w-[10px] h-[5px]"
                src={VectorIcon}
                alt="vector icon"
              />
            </div>
            <div className="flex gap-2 items-center px-6">
              <img
                className="w-[20px] h-[20px]"
                src={UserIcon}
                alt="user icon"
              />
              <p>username</p>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/data-upload" element={<DataUpload />} />
          <Route path="/namespace" element={<Namespace />} />
          <Route path="/sparql" element={<Sparql />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/graph-navigation" element={<GraphNavigation />} />
          <Route path="/my-process" element={<MyProcess />} />
        </Routes>
      </main>
    </div>
  );
}
