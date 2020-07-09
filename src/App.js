import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'

import ProductList from './components/ProductList'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ContactUs from './pages/ContactUs'

/**
 * 3. Function Component
 */
function App() {
  return (
    // 9. React Router
    <Router>
      {/* 5. Composing */}
      <Navbar />
      <div>
        <Switch>          
          {/* 5. Composing */}
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/**
 * 3. Function Component
 * 6. Extracting Component
 */
function Products() {
  // 10. State Management Redux
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  // 4. LifeCycle Method
  // 8. Hooks
  useEffect(() => {
    console.log('Display products')
  }, [])

  const handleSearchProducts = (e) => {
    e.preventDefault()
    let search = inputSearch.current.value
    // 10. State Management Redux
    dispatch({ type: 'FILTER PRODUCT', search: search })
  }

  const inputSearch = React.createRef()
  

  return (
    <div className="container">
      <h2>Products</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <input className="form-control" name="search" placeholder="Search" ref={inputSearch} />
            </div>
            
            <button className="btn btn-primary" onClick={handleSearchProducts}>Search</button>
          </form>
        </div>
      </div>

      {/* 5. Composing */}
      <ProductList products={products} />
    </div>
  );
}

/**
 * 3. Function Component
 * 6. Extracting Component
 */
function ProductDetail(){
  let match = useRouteMatch();

  // 10. State Management Redux
  const dispatch = useDispatch()

  // 7. Lifting State Up
  const addToCart = (product) => {
    console.log(product)
    // 10. State Management Redux
    dispatch({ type: 'ADD TO CART', product: product })
  }

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:productId`}>
          {/* 5. Composing */}
          <Product addToCart={addToCart} />
        </Route>
        <Route path={match.path}>
          404
        </Route>
      </Switch>
    </div>
  );
}

/**
 * 3. Function Component
 * 6. Extracting Component
 */
function Product(props) {
  let { productId } = useParams();

  // 10. State Management Redux
  const products = useSelector(state => state.products)

  // 8. Hooks
  const [product, setProduct] = useState({})
  const [productExist, setProductExist] = useState(false)

  // 8. Hooks
  // 4. LifeCycle Method
  useEffect(() => {
    let item = products.filter((item) => parseInt(item.id) === parseInt(productId) );
    if(item.length === 1){
      setProduct(item[0])
      setProductExist(true)
    }
    console.log(item)
  }, [])

  // 7. Lifting State Up
  const handleAddToCart = () => {
    props.addToCart(product)
  }

  if (productExist) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Detail Product</h2>
            <div className="card mb-4">
              <div className="card-body">
                <div className="media">
                  <img className="mr-3" src={product.img} alt={product.name} />
                  <div className="media-body">
                    <h5 className="mt-0">{product.name}</h5>
                    <p className="text-success">US${product.price}</p>

                    {/* 12. Lists */}
                    <ul className="list-inline">
                      {product.tags.map((tag, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <span className="badge badge-info">{tag}</span>
                          </li>                        
                        )
                      })}
                    </ul>  
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Detail Product</h2>
          <div className="card mb-4">
            <div className="card-body">
              Product not found
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
