import { Outlet } from "react-router-dom";
import Header from "../Components/NavModalHeader";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
