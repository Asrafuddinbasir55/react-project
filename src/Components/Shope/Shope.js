    
    import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
     import './Shope.css'

    const Shope = () => {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([])

         useEffect( () => {
             fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
             .then(res => res.json())
             .then(data => setProducts(data))
         }, [])

         const handaleClick = (product) => {
            console.log(product);
            // cart.push(product)
            const newCart = [...cart, product]
            setCart(newCart)
        }

        return (
            <div className='shop-container'>

              <div className='products-container'>
                  {
                   products.map(product=> 
                   <Product key={product.id}
                   product={product}
                   handaleClick={handaleClick}
                   ></Product>)   
                  }
                  </div> 
               <div className='cart-container'>
                   <Cart cart={cart}></Cart>
                  </div> 
            </div>
        );
    };
    
    export default Shope;