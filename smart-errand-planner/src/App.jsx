import './App.css';
import { useState } from "react";
import ErrandForm from "./components/ErrandForm";
import ErrandList from "./components/ErrandList";
import ErrandItem from './components/ErrandItem.Jsx';

  const USER_LOCATION = {
    latitude: 47.6060,
    longitude: -122.3325,
  }


function getDistance(lat1, lng1, lat2, lng2) {
  const dx = lat1 - lat2;
  const dy = lng1 - lng2;
  return Math.sqrt(dx * dx + dy * dy);
}

function App() {
  const [errands, setErrands] = useState([
    {
      id: 1,
      title: "Buy groceries(ID1)",
      latitude: 27.6062,
      longitude: -160.3321,
      completed: false,
    },
    {
      id: 2,
      title: "Pick up dry cleaning(ID2)",
      latitude: 47.6097,
      longitude: -122.3331,
      completed: false,
    },
    {
      id: 3,
      title: "Fly to Chicago (ID3)",
      latitude: 10.6097,
      longitude: -150.3331,
      completed: false,
    },
    {
      id: 4,
      title: "Poop(ID4)",
      latitude: 60.6097,
      longitude: -122.3331,
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState("all");
  const sortedErrands = errands 
    .map(errand => {
      const distance = getDistance(
        USER_LOCATION.latitude,
        USER_LOCATION.longitude,
        errand.latitude,
        errand.longitude
      );

      return {
        ...errand,
        distance,
      };
    })
    .sort((a ,b) => a.distance - b.distance);

  const visibleErrands = sortedErrands.filter( errand => {
    if (filter === "completed") return errand.completed;
    if (filter === "pending") return !errand.completed;
    return true;
  });

  function markErrandComplete(id) {
    setErrands(prevErrands => 
      prevErrands.map(errand =>
        errand.id === id
          ? { ...errand, completed: true }
          : errand
      )
    )
  }
  return (
    <div>
      <h1>Smart Errand Planner</h1>
      <p>Your Location:{""} {USER_LOCATION.latitude}, {USER_LOCATION.longitude}</p>
      <div>
        <button onClick={() => setFilter("all")}>
          All
        </button>

        <button onClick={() => setFilter("pending")}>
          Pending
        </button>

        <button onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>

      <ErrandForm />
      <ErrandList 
        errands={visibleErrands}
        onComplete={markErrandComplete} />
    </div>
  )};


export default App;
