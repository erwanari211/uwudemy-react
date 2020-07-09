import React from 'react';
import { Link } from "react-router-dom";

/**
 * 2. Class Component
 * 6. Extracting Component
 */
class ProductListItem extends React.Component {
    constructor(props){
        super(props)
        this.product = {}
    }

    // 4. LifeCycle Method
    componentDidMount(){
        console.log('msg from ProductListItem')
    }

    // 4. LifeCycle Method
    componentWillUnmount(){
        console.log('ProductListItem will be removed')
    }

    render() {
        // 4. LifeCycle Method
        console.log('msg from ProductListItem')

        const { product } = this.props
        return (
            <div className="card mb-4">
                <img className="card-img-top" src={product.img} alt={product.name} />
                <div className="card-body">
                <Link to={`/product-detail/${product.id}`}>
                    <h5 className="card-title">{product.name}</h5>
                </Link>
                <p className="card-text text-success">US${product.price}</p>
                </div>
            </div>
        );
    }  
}

export default ProductListItem;