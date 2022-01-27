import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'

function HomeScreen() {
  return (
            <>
                <h1>Latest Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} sm={12} md={6} lg={4}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
            </>
  );
}

export default HomeScreen;
