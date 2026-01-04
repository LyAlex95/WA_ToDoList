import ErrandItem from "./ErrandItem.Jsx";

function ErrandList({ errands }) {
    console.log("Errands received:", errands)
    return (
        <div>
            <h2> Errands </h2>
            <p>Errand list is rendering <br>
            </br>
                Displaying Closest errand at the top, Farthest errand at the bottom
            </p>
            {errands.map((errand, onComplete) => (
                <ErrandItem 
                    key={errand.id}
                    errand={errand}
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
}
 
export default ErrandList;