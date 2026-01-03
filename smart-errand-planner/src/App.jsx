import './App.css';
import { useState } from "react";
import ErrandForm from "./components/ErrandForm";
import ErrandList from "./components/ErrandList";
import ErrandItem from './components/ErrandItem.Jsx';

function App() {
  const [errands] = useState([
    {
      id: 1,
      title: "Buy groceries",
      latitude: 47.6062,
      longitude: -122.3321,
      completed: false,
    },
    {
      id: 2,
      title: "Pick up dry cleaning",
      latitude: 47.6097,
      longitude: -122.3331,
      completed: false,
    },
  ]);

  return (
    <div>
      <h1>Smart Errand Planner</h1>
      <ErrandForm />
      <ErrandList errands={errands} />
    </div>
  );
}

export default App;
