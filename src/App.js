import React from "react";
import ListToDo from "./dynamicList/listToDo";

function App() {

  const toDoList = [
    {
        id: 1,
        task: 'Buy bread',
        time: '30 min',
        subTasks: ['wash the dishes', 'clean floor', 'feed the cat'],
        name: 'John'
    },
    {
        id: 2,
        task: 'Buy bread',
        time: '40 min',
        subTasks: ['wash the dishes', 'clean floor', 'feed the cat'],
        name: 'Tom'
    },
    {
        id: 3,
        task: 'Buy bread',
        time: '40 min',
        subTasks: ['wash the dishes', 'clean floor', 'feed the cat'],
        name: 'Bill'
    },
    {
        id: 4,
        task: 'Buy bread',
        time: '40 min',
        subTasks: ['wash the dishes', 'clean floor', 'feed the cat'],
        name: 'Yuuu'
    }
]
  return (
    <div className="App">
      <h1>Hello hello</h1>
      <ListToDo listOfTasks={toDoList} />
    </div>
  );
}

export default App;
