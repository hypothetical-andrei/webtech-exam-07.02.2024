import { useState, useEffect } from 'react'
import store from '../stores/TaskStore'
import Task from './Task'

function TaskList () {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		setTasks(store.getItems())
		store.emitter.addEventListener('UPDATE', () => {
			setTasks([...store.getItems()])
		})
	}, [])

	return (
		<div>	 
			<div>
				{
					tasks.map((e) => 
						<Task item={e} key={e.id} />
					)
				}
			</div>
		</div>
	)
}

export default TaskList
