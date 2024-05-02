
import TodoCard from './TodoCard'
import PropTypes from 'prop-types'

export default function TodoList(props) {
    const { todos} = props;

  return (
    <ul className='main'>
        {todos.map((todo,todoIdx)=>{
            return (
               <TodoCard {...props} key={todoIdx} index={todoIdx} >
                <p>{todo}</p>
               </TodoCard>
            )
        })}
    </ul>
  )
}
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
