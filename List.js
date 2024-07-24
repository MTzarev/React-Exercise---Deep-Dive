function List () {
let numbers = [1, 2, 3, 4, 5, 6];
//let i = Date.now()
return (
    <div>
    <ul>
        {numbers.map((x,i)=> <li key={i}>num: {x}</li>)}
    </ul>
    </div>
)
}
export default List