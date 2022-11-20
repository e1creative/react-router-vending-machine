import { Link } from 'react-router-dom'

import './Snack.css'

import snickers from './snickers.jpg'
import twix from './twix.jpeg'
import kitkat from './kitkat.jpg'

const Snack = ({name}) => {
    const imgObjKey = name + "Img";
;
    const imgSrc = {
        snickersImg: snickers,
        twixImg: twix,
        kitkatImg: kitkat
    }
    return (

        <div className="Snack">
            <p>{name}</p>
            <img src={imgSrc[imgObjKey]} alt={name}></img>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    )
}

export default Snack;