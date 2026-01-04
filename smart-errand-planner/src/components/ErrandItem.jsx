import {useState } from "react";


function ErrandItem({ errand, onComplete }) {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <p>
                {errand.completed ? "Completed: " : ""}
                {errand.title}
            </p>
            <p>
                Distance score: {""}
                {errand.distance.toFixed(4)}
            </p>
            <p>
                Lat: {errand.latitude}, Lng: {errand.longitude}
            </p>

            {!errand.completed &&(
                <>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <button
                        disabled={!checked}
                        onClick={() => onComplete(errand.id)}
                    >
                        Mark Complete
                    </button>
                </>
            )}
        </div>
    );
}

export default ErrandItem;
