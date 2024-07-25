import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    const [count, setCount] = useState(0)
    const [activeCategory, setActiveCategory] = useState('')
    const [isFooterShown, updateIsFooterShown] = useState(true)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        return () => console.log('Cette alerte s\'affiche quand le composant est retiré du DOM')
    })

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} count={count} setCount={setCount} />
            </div>

            <button onClick={() => updateIsFooterShown(!isFooterShown)}>
                Cacher le composant Footer !
            </button>
            {isFooterShown && <Footer cart={cart} />}
        </div>
    )
}

export default App;
