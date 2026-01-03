function ErrandItem({ errand }) {
    return (
        <div>
            <p> {errand.title} </p>
            <p> {errand.latitude}Hello I am bug {errand.longitude} </p>
        </div>
    );
}

export default ErrandItem;
