import './App.css';
import TodoList from './components/TodoList';
function App() {
  return (
    <>
      <h1 className="title">React ToDo App using Hooks</h1>
      <h1 className="description">✌️  Hector Ruiz  |  hectorruizlaph@gmail.com  |  (+52) 614 184 3352</h1>
      <div className="todo-app">
        < TodoList />
      </div>
    </>
  );
}

export default App;
