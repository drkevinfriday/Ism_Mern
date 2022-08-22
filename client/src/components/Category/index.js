import React, { useState, useEffect }from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
import collage from '../../assets/images/collage.jpg';
import collage2 from '../../assets/images/collage2.jpg';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import SingleCategory from '../SingleCategory';

//function Category () {
    //const [ currentCategory, setCurrentCategory ] = useState();
const Category = () =>{
//console.log(posts);
    let [photos] = useState ([
        
        {
        id: 1,
        name: 'Sexism',
        image: sexism,
        image2: collage,
        url: '/category/sexism',
        description: 'Sexism is form of discrimination on the basis of sex. Women are more likely to experience sexism as well as other marginalized genders. Sexism encourages a hostile environment which not only affects women in the workplace but also perceived gender roles that are perpetuated in society.'
        },
        {
        id: 2,
        name: 'Racism',
        image: racism,
        image2: collage2,
        url: '/category/racism',
        description: 'Racism...'
        },
        {
        id: 3,
        name: 'Ableism',
        image: ableism,
        url: 'category/ableism',
        description: 'Ableism...'
        },
        {
        id: 4,
        name: 'Anti-Semitism',
        image: antisemitism,
        url: 'category/antisemitism',
        description: 'Anti-Semitism...'
        },
        {
        id: 5,
        name: 'Tokenism',
        image: tokenism,
        url: 'category/tokenism',
        description: 'Tokenism...'
        },
        {
        id: 6,
        name: 'Colorism',
        image: colorism,
        url: 'category/colorism',
        description: 'Colorism is prejudice against people with a darker skin tone and is characterized by its occurrence within the same ethnic or racial community.'
        },
        {
        id: 7,
        name: 'Cissexism',
        image: cissexism,
        url: 'category/cissexism',
        description: 'Cissexism...'
        },
        {
        id: 8,
        name: 'Elitism',
        image: elitism,
        url: 'category/elitism',
        description: 'Elitism exists in the form of a patriarchal system in which the highest status is assigned to the most privileged. Elitism is a form of discrimination on the basis of social standing.'
        }, 
    ]
    
    );
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [fullscreen, setFullscreen] = useState(true);

    const [index, setIndex] = useState(0);
    //const [offset, setOffset] = useState(0);

    return (
        <>
        <div> 
        <Row xs={1} md={2} className="g-4" 
        activeindex={index}
        style= {{
            position: "relative",
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingLeft: "100px",
            paddingRight: "100px",
            marginTop: "0",
            marginLeft: "0",
            marginRight: "0",
        }}
        //onClick={handleSelect}
        >
           {photos.map(({ image, name, id, url, description, image2}) => (  
          //{Array.from({ length: 4 }).map((_, idx) => (
            <Col key={id}>
              <Card 
              >
                <Card.Img variant="top" src={image} 
                style={{
                   
                }}
                 />
                <Card.Body
                style={{
                    background: "transparent",
                }}>
                   <a variant="primary" onClick={handleShow} //onClick={handleShow}//onClick={() => Description()} // to={url}
                  style= {{
                    textDecoration: 'none',
                    fontFamily: 'Misto',
                    fontSize: '3vw',
                    color: '#2f2f2f',
                    letterSpacing: '2px',
                    cursor: 'pointer',
                  }}
                  >
                  {name}</a> 
                </Card.Body>
              </Card>
            </Col>
          ))}   
        </Row>  
        <Child ></Child> 
       </div>
       </>  
    );
    
    function Child () { 
      const { loading, data } = useQuery(QUERY_POSTS);
      const posts = data?.posts || [];
      console.log(posts.category);

      if (posts.category == null) {
      return (  
        <>
         <Modal show={show} onHide={handleClose} fullscreen={fullscreen} 
         style={{
          background: "transparent",
         }}
         >
         <Modal.Header closeButton>
         
           <Modal.Title
           style= {{
             fontFamily: "Misto",
             fontSize: "2.5rem",
           }}
           >Title:{posts.category}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <p></p>
         <div className="col-12 mb-3">
          {loading ? (
          <div>Loading...</div>
          ) : ( 
          <SingleCategory posts={posts} title="Some Feed for Thought(s)..." />
          )}
        </div>
         <img  alt="collage" style={{maxHeight: "100%", maxWidth: "100%"}}/>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Save Changes
           </Button>
         </Modal.Footer>
        </Modal>
       </>
         )}
      }}
    
export default Category;