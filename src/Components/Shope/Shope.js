    
    import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
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

        useEffect( () => {
           const storeCart = getStoreCart();
           const saveCart = [];
           for (const id in storeCart) {
               const addedProduct = products.find(product => product.id === id)
               if (addedProduct) {
                   const quantity = storeCart[id]
                   addedProduct.quantity = quantity
                saveCart.push(addedProduct)
               }
           } 
           setCart(saveCart) 
        }, [products])
         

         const handaleClick = (product) => {
          let newCart = [];
            const exists = cart.find(newProduct => newProduct.id === product.id)
            if (!exists) {
                product.quantity = 1;
                newCart = [...cart. product] 
            }
            else {
                const rest = cart.filter(newProduct => newProduct.id !== product.id)
                exists.quantity = exists.quantity + 1;
                newCart = [...rest, exists
                ]
            }

            setCart(newCart)
            addToDb(product.id)
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