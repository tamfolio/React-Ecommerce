import React from 'react';
import { Container} from 'react-bootstrap'
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Container>
      <HomeScreen/>
      </Container>
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
