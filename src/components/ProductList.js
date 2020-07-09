import React from 'react';
import ProductListItem from './ProductListItem'

/**
 * 2. Class Component
 * 6. Extracting Component
 */
class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.products = {}
    }

    // 4. LifeCycle Method
    componentDidMount(){
        console.log('msg from ProductList')
    }

    render() {
        // 4. LifeCycle Method
        console.log('render ProductList')

        const { products } = this.props
        const rows = [];

        // 5. Composing
        products.forEach((product) => {
            rows.push(
              <div className="col-md-4 col-sm-6" key={product.id}>
                <ProductListItem product={product} />
              </div>
            );
        });

        return (
            <div className="row">
                {rows}
            </div>
        );
    }  
}

export default ProductList;