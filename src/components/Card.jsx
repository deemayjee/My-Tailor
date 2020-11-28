import React from 'react';
import productImage from '../images/productImage.jpg';

const Card = () => {
    return (
        <div className="card">
            <img src={productImage} alt="Denim Jeans" />
                <h1>Tailored Jeans</h1>
                <p className="price">$19.99</p>
                <p>Some text about the jeans..</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
