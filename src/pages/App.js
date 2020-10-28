import React, {useState} from 'react';
import ToDoList from "../components/ToDoList";
import AddItemModal from "../components/AddItemModal";
import '../styles/App.css';

let id = 1;
function App() {
    const [todo, setTodo] = useState([]);

    const [done, setDone] = useState([]);

    const [itemName, setItemName] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    function onAddNewItem() {
        setTodo([...todo, ...[{
            name: itemName,
            id,
        }]]);
        id++;
        setItemName("");
        setIsModalOpen(false);
    }

    function moveToDone(item) {
      setDone([...done, ...[item]]);
      setTodo(todo.filter(i => i.id !== item.id));
    }

    return (
        <>
            <div className="App">
                <section className="content__wrapper">
                    <ToDoList moveToDone={moveToDone} items={todo} setIsModalOpen={setIsModalOpen} canCreate={true}
                              title="To Do"/>
                    <ToDoList moveToDone={() => {
                    }} items={done} setIsModalOpen={setIsModalOpen} title="Done"/>
                </section>
            </div>
            <AddItemModal itemName={itemName} setItemName={setItemName} isModalOpen={isModalOpen}
                          setIsModalOpen={setIsModalOpen} onAddNewItem={onAddNewItem}/>
        </>
    );
}

export default App;
