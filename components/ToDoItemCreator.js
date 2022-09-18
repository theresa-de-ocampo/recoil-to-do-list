import React from 'react'
import { useSetRecoilState } from 'recoil'
import { toDoListAtom } from '../atoms'

export default function ToDoItemCreator() {
  const [textValue, setTextValue] = React.useState('')
  const setToDoList = useSetRecoilState(toDoListAtom)

  function addItem() {
    setToDoList(prevToDoList => [
      ...prevToDoList,
      {
        id: getId(),
        text: textValue,
        isComplete: false
      }
    ])

    setTextValue('')
  }

  function onChange({ target: {value} }) {
    setTextValue(value)
  }

  return (
    <div>
      <input type='text' value={textValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

let id = 0
function getId() {
  return id++;
}