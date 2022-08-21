import React, { useState, useEffect }from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import blm from '../../assets/images/blm.jpeg';
import tokenism from '../../assets/images/tokenism.jpeg';
import sexism from '../../assets/images/sexism.jpeg';
import ableism from '../../assets/images/ableism.jpeg';
import antisemitism from '../../assets/images/anti-semitism.jpeg';

function Category (props) {
    const [ currentCategory, setCurrentCategory ] = useState();

    const [photos] = useState ([
        {
        category: 'Sexism',
        image: sexism,
        url: ''
        },
        {
        category: 'Racism',
        image: blm,
        url: ''
        },
        {
        category: 'Ableism',
        image: ableism,
        url: ''
        },
        {
        category: 'Anti-Semitism',
        image: antisemitism,
        url: ''
        },
        {
        category: 'Colorism',
        image: ,
        url: ''
        },
        {
        category: 'Cissexism',
        image: ,
        url: ''
        },
        {
        category: 'Elitism',
        image: ,
        url: ''
        },
        {
        category: 'Tokenism',
        image: tokenism,
        url: ''
        }
    ]);

    const [index, setIndex] = useState(0);
    const [offset, setOffset] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);  
    };

   
    return (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
   
 }