import React,{useState} from 'react';
import './Card.css';

import {Button} from 'react-bootstrap';


const API_IMG="https://image.tmdb.org/t/p/w500/"
const Card = ({title,poster_path, vote_average, overview, release_date}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
        
    }
    const handleClose = () => setShow(false);
    let year = JSON.stringify(release_date);
    
    
    return (
        <div className="card">
            <div className="card_details">
            <img src={API_IMG+poster_path} />
            <h1 id="title"> {title} </h1>
            <h4> {vote_average} </h4>
            <h3> {overview} </h3>
            <button type="button" className="card_btn" onClick={handleShow}>more info..</button>
            </div>
            <div className="card_modal">
            {show && <div
        show={show}
        onClose={handleClose}
        >
                        <Button className="card_btn2" onClick={handleClose}> X </Button>
                        <img className="card-img-top" style={{width:'24rem'}}src={API_IMG+poster_path} />
                        <h2 className="modal_title">{title} ({vote_average}) </h2>
                        <h5> {year.substr(1,4)}</h5>
                        
                        <p> Description: {overview} </p>
                        
                    
            </div> }
            </div>
        </div>
    )
}

export default Card
