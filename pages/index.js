import ToDoList from '../components/ToDoList'
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
    <RecoilRoot>
      <ToDoList />
    </RecoilRoot>
  )
}