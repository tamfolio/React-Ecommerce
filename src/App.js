import React from 'react';
import { Container} from 'react-bootstrap'
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Container>
      <h1>React ProShop</h1>
      </Container>
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
