import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import EmployeeList from './pages/EmployeeList/EmployeeListPage';
import EmployeeProfile from './pages/EmployeeProfile/EmployeeProfilePage';

function App() {
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
