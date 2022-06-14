import React, { Suspense } from 'react'
import './normalize.css';
import './App.css';

const MainBackground = React.lazy(() => import('./components/MainBackGround/MainBackground'))
const MyDescription = React.lazy(() => import('./components/MyDescription/MyDescription'));
const Proyects = React.lazy(() => import('./components/Proyects/Proyects'));
const ContactForm = React.lazy(() => import('./components/ContactForm/ContactForm'));
const Technologies = React.lazy(() => import('./components/Technologies/Technologies'));
const Certificates = React.lazy(() => import('./components/Certificates/Certificates'));

function App() {


  return (
    <Suspense fallback={ null }>
        <div className='main-container'>
          <MainBackground />
          <MyDescription />
          <Technologies />
          <Proyects />
          <Certificates />
          <ContactForm />
        </div>
    </Suspense>
  );
}
//       <Certificates />
export default App;
