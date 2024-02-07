import store from '../stores/TaskStore'

function Task (props) {
  let { item } = props
  const [ isEditable, setIsEditable ] = useState(false)
  const [ description, setDescription ] = useState(item.description)
  const [ priority, setPriority ] = useState(item.priority)
  return (
    <div>
      {
        isEditable ? (
          <div>
           {/* TODO */}
          </div>
        ) : (
          <div>
           {/* TODO */}
          </div>
        )
      }
    </div>
  )

}

export default Task
