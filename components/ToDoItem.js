import { useRecoilState } from "recoil"
import { toDoListAtom } from "../atoms"
import { replaceItemAtIndex, removeItemAtIndex } from "../utils"


export default function ToDoItem({ item }) {
  const [toDoList, setToDoList] = useRecoilState(toDoListAtom)
  const index = toDoList.findIndex(toDoListItem => toDoListItem === item)

  function editItemText({target: {value}}) {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      text: value
    })
    setToDoList(newList)
  }

  function toggleItemCompletion() {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      isComplete: !item.isComplete
    })
    setToDoList(newList)
  }

  function deleteItem() {
    const newList = removeItemAtIndex(toDoList, index)
    setToDoList(newList)
  }

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
