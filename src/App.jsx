import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
// import './App.css'

function App() {
  return (
    <>
    <div className="h-100">
      <Nav />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;
