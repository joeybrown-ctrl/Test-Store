import React from 'react';

function Card(props) {
    const styles = {
        card: {
            width: '18 rem'
        }
    }

    return(
        <>
            <div className="card" style={styles.card}>
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">${props.price}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.description}</li>
                    <li className="list-group-item">{props.category}</li>
                </ul>
            </div>
            <br />
            <hr/>
        </>
    )
}

export default Card;