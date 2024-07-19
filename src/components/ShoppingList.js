import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList({ cart, updateCart }) {
    // Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isSpecialOffer }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} isSpecialOffer={isSpecialOffer} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
