import { useRecoilValue } from 'recoil'
import { filteredToDoList } from '../selectors'
import Filter from './Filter'
import Stats from './Stats'
import ToDoItem from './ToDoItem'
import ToDoItemCreator from './ToDoItemCreator'

export default function ToDoList() {
  const toDoList = useRecoilValue(filteredToDoList)

  return (
    <>
      <Stats />
      <Filter />
      <ToDoItemCreator />
      { toDoList.map(item => <ToDoItem key={item.id} item={item} />) }
    </>
  )
}
