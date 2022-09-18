import { useRecoilValue } from 'recoil'
import { toDoListAtom } from '../atoms'
import ToDoItem from './ToDoItem'
import ToDoItemCreator from './ToDoItemCreator'

export default function ToDoList() {
  const toDoList = useRecoilValue(toDoListAtom)

  return (
    <>
      <ToDoItemCreator />
      { toDoList.map(item => <ToDoItem key={item.id} item={item} />) }
    </>
  )
}
