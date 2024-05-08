import "./display.css"
export default function ShoppingList({data})
{
    // const data = [{name : "egg",quantity : 3 , status : true},
    //             {name: "milk" ,quantity:4,status : false},
    //             {name:"oil",quantity:5,status:false}
    //         ];
    //by using ...items we can pass the object values
    return(
    <div className="info-display">
        <h2>Shopping List</h2>
        <ul>
            {data.map((item) =>
                 <li style={{color : item.status ? "gray" : "red", textDecoration : item.status ? "line-through" : "none"}} key={item.id}>
                    {`${item.name} - ${item.quantity} status : ${item.status ? "Purchased" : "Not Purchased"}`}
                </li>)}
        </ul>
    </div>
    )
}