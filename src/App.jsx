import React from 'react'
import { useState } from 'react'
import Nav from './components/Nav'
import Leftform from './Left-form'
import RightForm from './components/RightForm'

const App = () => {


    const [dark, setDark] = useState(false);

    const switchTheme = () => {
        setDark(dark ? false : true)
    }


    let [tasks, setTasks] = useState([{
        name : "Himanshi",
        contact : "9876543219",
        items : "Pizza , Coffee",
        tableNo : "11",
        price : "200"
    }])

    
    const removeTask = (id) => {
        // console.log(id)

        // setTasks(tasks.filter(task => {
        //     if (task.id !== id) {
        //         return task
        //     }
        // }))

        setTasks(tasks.filter(task => task.id !== id))

    }

    const clearTasks = () => {
        setTasks([])
        form.current.reset()
        // form.reset()
    }


    const addTask = (task) => {
        // console.log(task)
        setTasks([...tasks, task])
    }

    const [edit, setEdit] = useState(
        {
            task: {},
            isEdit: false
        }
    )

    const editTask = (task) => {
        setEdit(
            {
                task: task,
                isEdit: true
            }
        )
    }



    return (
        <div>


            <div className={dark ? "h-100vh w-full bg-gray-900 flex justify-center p-3" : "h-100vh w-full bg-[#FDECC8] flex justify-center p-3"}>
                <div className={dark ? "w-full max-w-6xl rounded-2xl p-4 bg-[#80A1BA] shadow-xl border border-black/30" : "w-full max-w-6xl rounded-2xl p-4 bg-[#F9D9B5] shadow-xl border border-black/30"}>



                    <Nav switchTheme={switchTheme} dark={dark} />


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">


                        <Leftform addTask={addTask} clearTasks={clearTasks} dark={dark} edit={edit} />


                        <RightForm tasks={tasks} removeTask={removeTask} dark={dark} editTask={editTask} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
