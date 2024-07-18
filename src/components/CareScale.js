import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function handleClick(scaleValue, careType) {
    let indice = quantityLabel[scaleValue];
    let compType = (careType === 'light') ? 'de lumière' : 'd\'arrosage';

    alert('Cette plante requiert ' + indice + ' ' + compType);
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon' />
        ) : (
            <img src={Water} alt='water-icon' />
        )

    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
