import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import EmployeeList from "./pages/EmployeeList/EmployeeListPage";
import EmployeeProfile from "./pages/EmployeeProfile/EmployeeProfilePage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const { isDark } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/profile/:id" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
