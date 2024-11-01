import { useState } from 'react'

export default function App() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

    function handleChange(ev){

      setTitle(ev.target.value);

      console.log(title);
    }

    function handleClick(ev){
      ev.preventDefault();

      setTask([...task, title]);

      setTitle('');

    }

    function handleDelete(id){

      setTask(task.filter((e, index) => index !== id));
    }

  return(
    <main>
      <label>Título</label>
      <input type="text" placeholder='Digite sua tarefa...' 
      onChange={handleChange} 
      value={title}
      />
      <button onClick={handleClick}>Adicionar</button>
      {task.map( (item, index) => (
        <li key={index}>
          <h3>{item}</h3>
          <button onClick={() => (handleDelete(index))}>Deletar</button>
        </li>
      ) )}
    </main>
  )
}