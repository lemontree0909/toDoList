import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>What are your plans for this year?</h1>
      </div>

      <ToDoList/>
      
    </div>
  );
}

export default App;
