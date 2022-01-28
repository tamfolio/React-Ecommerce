import React from 'react';
import {Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products';

function ProductScreen({ match }) {

    const product = products.find((p) => p._id === match.params.id)
    
  return (
  <div>{product.name}</div>
  );
}

export default ProductScreen;
