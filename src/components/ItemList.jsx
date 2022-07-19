import React from "react";

function ProductCard({title, price, image}){

    return (
        <div className="product-card">
            
            <div className="product-card-image">
                <img src={image} alt={ `${title}`} />

            </div>
            <div className="product-card-body">
                <div className="product-card-price">
                    <p>
                        {price}
                    </p>
                </div>
                <div className="product-card-title">
                    <h3>{title}</h3>
                </div>
                <button className="buy-btn">Buy</button>

            </div>
            


        </div>
    )

}

function ItemList(props) {

    const productsArray = props.data
    return (
        <>  

        { productsArray.map(product =>{

            return <ProductCard key={product.id} title={product.title} image={product.image} price={product.price}/>
            
            }) 
        }
        </>

    )
}

export default ItemList