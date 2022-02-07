import './normalize.css';
import './App.css';
import MainBackground from './components/MainBackGround/MainBackground';
import MyDescription from './components/MyDescription/MyDescription.jsx';
import Proyects from './components/Proyects/Proyects';
import ContactForm from './components/ContactForm/ContactForm';

function App() {


  return (
    <div className='main-container'>
      <MainBackground />
      <MyDescription />
      <Proyects />
      <ContactForm />
    </div>
  );
}

export default App;
