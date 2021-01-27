import React, { useState } from 'react';
import './HeroArea.css';

import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroArea = (props) => {
    const { key, name, img } = props.data;
    return (
        <div className="col-md-3">
            <Link className='body_content' to={`/register/${key}`}>
                <Card
                    style={{ width: '200px', height: '390px', marginTop: '30px', borderRadius: '10px', border: 'none', overflow: 'hidden' }}>
                    <div style={{ overflow: 'hidden' }}>
                        <Card.Img variant="top" src={img}
                            style={{ height: '310px' }} className='card_img'
                        />
                    </div>

                    <Card.Body className='bg-primary card_text'>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default HeroArea;