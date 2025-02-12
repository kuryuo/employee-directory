import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile/EmployeeProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/profile" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
