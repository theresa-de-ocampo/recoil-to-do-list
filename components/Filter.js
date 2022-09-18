import { useRecoilState } from "recoil"
import { filterAtom } from "../atoms"


export default function Filter() {
  const [filter, setFilter]  = useRecoilState(filterAtom)

  function updateFilter({target: {value}}) {
    setFilter(value)
  }

  return (
    <>
      Filter:{' '}
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>Show All</option>
        <option value='Show Completed'>Show Completed</option>
        <option value='Show Uncompleted'>Show Uncompleted</option>
      </select>
    </>
  )
}
