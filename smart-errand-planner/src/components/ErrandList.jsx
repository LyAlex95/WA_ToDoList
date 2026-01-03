import ErrandItem from "./ErrandItem.Jsx";

function ErrandList({ errands }) {
    console.log("Errands received:", errands)
    return (
        <div>
            <h2> Errands </h2>
            <p>Errand list is rendering</p>
            {errands.map((errand) => (
                <ErrandItem key={errand.id} errand={errand} />
            ))}
        </div>
    );
}
 
export default ErrandList;