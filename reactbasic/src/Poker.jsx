import "./display.css"
export default function Poker({val1 = 1,val2 = 1,val3 = 1})
{
    // const isWin = val1 === val2 && val2 === val3 && val3 === val1;
    const isWin = val1 === val2 && val2 === val3;
    return(
        <div className="info-display">
            <p style={{background : 'Lightblue', textAlign : "center"}}>{`${val1} ${val2} ${val3}`}</p>
            <h2 style={{color : isWin ? "green" : "red"}}>{isWin ? "You win!" : "You lose :("}</h2>
            {/* <h3 style={{color : "gray"}}>{isWin && "Congrats!!!"}</h3> */}
            {isWin && <h2 style={{fontWeight: 100}}>Congrats</h2>}
        </div>
    )
}