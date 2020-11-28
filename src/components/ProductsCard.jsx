import React from 'react';
import Card from '../components/Card';

const cards = ['1', '2', '3', '4' , '5' , '6'];


const ProductsCard = () => {
    return (
        <div className="products-title">
            <h1>View Our Products</h1>

            {cards.map((card) => <Card />)}
        </div>
    )
}

export default ProductsCard
