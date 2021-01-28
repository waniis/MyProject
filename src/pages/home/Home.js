import React from 'react'
import Data from './components/Data'
import TaskTable from './components/TaskTable'
import Title from './components/Title'

const Home = () => {
    return (
        <div>
            <Title></Title>
            <Data></Data>

            <TaskTable></TaskTable>

        </div>
    )
}

export default Home
