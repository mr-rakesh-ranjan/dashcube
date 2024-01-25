import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

import './main.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import DashboardMain from './Components/Pages/Dashboard/DashboardMain';
import Reports from './Components/Pages/Reports/Reports';

function App() {

  const [title, setTitle] = useState("Dashcube");
  useEffect(() => {
    document.title = title
  }, [title])

  // toggle sidebar
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);
  const [dropdowns, setDropdowns] = useState([]);
  const [sideDividers, setSideDividers] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
    if (isSidebarHidden) {
      setSideDividers(sideDividers.map(() => '-'));
      setDropdowns(dropdowns.map(() => ({ active: false, show: false })));
    } else {
      setSideDividers(sideDividers.map(divider => divider.text));
    }
  };

  const resetSidebarContent = () => {
    if (isSidebarHidden) {
      setDropdowns(dropdowns.map(() => ({ active: false, show: false })));
      setSideDividers(sideDividers.map(() => '-'));
    }
  };

  const updateSidebarContent = () => {
    if (isSidebarHidden) {
      setDropdowns(dropdowns.map(() => ({ active: false, show: false })));
      setSideDividers(sideDividers.map(divider => divider.text));
    }
  };

  return (
    <div className="App">
      <Router>
        <Sidebar updateSidebarContent={updateSidebarContent} resetSidebarContent={resetSidebarContent} isSidebarHidden={isSidebarHidden}  />
        <section id='content'>
          <Navbar title={title} toggleSidebar={toggleSidebar} />
          <main>
            <Routes>
              <Route path="/" element={<DashboardMain setTitle={setTitle} />} />
              <Route exact path="/reports" element={<Reports setTitle={setTitle} />} />
            </Routes>
          </main>
        </section>
      </Router>
    </div>
  );
}

export default App;
