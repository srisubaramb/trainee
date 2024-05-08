import "./AirBnb.css"
import AirBnbElement from "./AirBnbElement"
export default function AirBnb({properties}) 
{
    return(
        <div className="display-main">
            {properties.map(items => <AirBnbElement {...items} key={items.id}/>)}
        </div>
    )
}
// { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 }