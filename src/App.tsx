import { useState } from 'react'
import './App.css'

function App() {
  const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
  ];
  
  const TotalTimeFrontend = () => {
    return tasks.filter((elem) => elem.category === 'Frontend').reduce((sum,elem) => sum + elem.timeSpent,0)
  }

  const TypeBug = () => {
    return tasks.filter((elem) => elem.type === 'bug').reduce((sum,elem) => sum + elem.timeSpent,0)
  }
  const UItasks = () => {
    return tasks.filter(elem => elem.title.includes('UI')).length
  };

  const CountTasks = () => {
    const front: number = tasks.filter(elem => elem.category === 'Frontend').length
    const back : number= tasks.filter(elem => elem.category === 'Backend').length
    const count: { [key: string]: number } = {
      Frontend : front,
      Backend : back
    }
    return count;
  }
  interface FilteredTask  {
      title: string,
      category: string
  }
  const MoreFour = () => {
    const result: FilteredTask[] =tasks.filter(elem => elem.timeSpent > 4).map(elem => ({title: elem.title, category: elem.category}))
    return  result
  }

  return (
    <>
      <div>
        <h2>Task 1</h2>
        Количество задач у каждой котегории: {JSON.stringify(CountTasks())} <br />
        UI задачи: {UItasks()} <br />
        Bug задачи: {TypeBug()} <br />
        Общее колчичество часов фронтенда: {TotalTimeFrontend()} <br />
        Задачи с затраченным временем больше 4 часов: {JSON.stringify(MoreFour())}
      </div>
      <div>
        <h2>Task 2</h2>
          
      </div>
    </>
  )
}

export default App
