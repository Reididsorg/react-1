function Cart() {
    const price1 = 8;
    const price2 = 10;
    const price3 = 15;

    return (
            <div>
                <h2>Panier</h2>
                <ul>
                    <li>Monstera : {price1}€</li>
                    <li>Lierre : {price2}€</li>
                    <li>Bouquet de fleurs : {price3}€</li>
                </ul>
                <p>TOTAL : {price1 + price2 + price3}€</p>
            </div>
    )
}

export default Cart;
