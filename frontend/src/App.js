import './App.css';
import { Menu, MenuBook } from '@mui/icons-material';
import NavBar from './component/NavBar';
import Header from './component/Header';
import CardDisplay from './component/CardDisplay';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <CardDisplay />
      <Footer/>
    </>
  );
}

export default App;
