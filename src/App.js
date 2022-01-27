import React from 'react';
import { Container} from 'react-bootstrap'
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <main>
      <Container>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='/product/:id' component={ProductScreen}/>
      </Container>
      </main>
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
