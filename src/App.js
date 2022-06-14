import './normalize.css';
import './App.css';
import MainBackground from './components/MainBackGround/MainBackground';
import MyDescription from './components/MyDescription/MyDescription.jsx';
import Proyects from './components/Proyects/Proyects';
import ContactForm from './components/ContactForm/ContactForm';
import Technologies from './components/Technologies/Technologies';
import Certificates from './components/Certificates/Certificates';

function App() {


  return (
    <div className='main-container'>
      <MainBackground />
      <MyDescription />
      <Technologies />
      <Proyects />
      <Certificates />
      <ContactForm />
    </div>
  );
}
//       <Certificates />
export default App;
