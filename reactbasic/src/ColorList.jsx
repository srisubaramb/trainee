import "./display.css"
export default function ColorList({colors = ['red','pink']})
{
    return(
        <div className="info-display"> 
            <ul>
                {colors.map((singleColor) => <li style={{color : singleColor,fontSize : 20}} key={singleColor}>{singleColor}</li>)}
            </ul>
        </div>
    )
}