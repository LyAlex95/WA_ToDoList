import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ErrandForm from './components/ErrandForm';
import ErrandList from './components/ErrandList';

function App() {
return (
  <div>
    <h1> Smart Errand Planner</h1>
    <p>Location-aware task planning</p>
    <ErrandForm />
    <ErrandList />
  </div>
  );
}

export default App
