import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import racism from '../../assets/images/racism.jpg';
import tokenism from '../../assets/images/tokenism.jpg';
import sexism from '../../assets/images/sexism.jpg';
import ableism from '../../assets/images/ableism.jpg';
import antisemitism from '../../assets/images/anti-semitism.jpg';
import elitism from '../../assets/images/elitism.jpg';
import cissexism from '../../assets/images/cissexism.jpg';
import colorism from '../../assets/images/colorism.jpg';

function Category (props) {
    const [ currentCategory, setCurrentCategory ] = useState();

    const [photos] = useState ([
        {
        id: 1,
        category: 'Sexism',
        image: sexism,
        url: '/category/sexism',
        description: 'Sexism is a form of discrimination...'
        },
        {
        id: 2,
        category: 'Racism',
        image: racism,
        url: '/category/racism',
        description: 'Racism...'
        },
        {
        id: 3,
        category: 'Ableism',
        image: ableism,
        url: 'category/ableism',
        description: 'Ableism...'
        },
        {
        id: 4,
        category: 'Anti-Semitism',
        image: antisemitism,
        url: 'category/antisemitism',
        description: 'Anti-Semitism...'
        },
        {
        id: 5,
        category: 'Tokenism',
        image: tokenism,
        url: 'category/tokenism',
        description: 'Tokenism...'
        },
        {
        id: 6,
        category: 'Colorism',
        image: colorism,
        url: 'category/colorism',
        description: 'Colorism...'
        },
        {
        id: 7,
        category: 'Cissexism',
        image: cissexism,
        url: 'category/cissexism',
        description: 'Cissexism...'
        },
        {
        id: 8,
        category: 'Elitism',
        image: elitism,
        url: 'category/elitism',
        description: 'Elitism...'
        }
    ]);

    const [index, setIndex] = useState(0);
    const [offset, setOffset] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);  
    };

    return (
        <Row xs={1} md={2} className="g-4"
        activeindex={index}
        >
            {photos.map(({ image, category, id, url, description}) => (
          //{Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card  
              >
                <Card.Img variant="top" src={image} 
                style={{
                    maxHeight: '75%'
                }}
                 />
                
                <Card.Body>
                <Link to={url}>This is a link</Link>
                  <Card.Title>{category}</Card.Title>
                  <Card.Text>
                    {description}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
              ))}
        </Row>
      );
 }

 export default Category;