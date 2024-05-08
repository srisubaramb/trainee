import "./DoubleDice.css"

export default function DoubleDice()
{
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    let msg = ""
    if(num1 === num2) msg = "You win!"
    else msg = "You lose :("
    let c = msg == 'You win!' ? "green" : 'red'
    return (
        <div className="dice-display">
            <h1>Dice Game</h1>
            <ul>
                <li>Dice1 : {num1}</li>
                <li>Dice2 : {num2}</li>
            </ul>
            <h2 style={{color : c}}>{msg}</h2>
        </div>
    )
}