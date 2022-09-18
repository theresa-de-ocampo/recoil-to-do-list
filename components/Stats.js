import { useRecoilValue } from "recoil"
import { stats } from "../selectors"

export default function Stats() {
  const { totalOfAllItems, totalComplete, totalUncomplete, completePercentage} = useRecoilValue(stats)
  const formattedPercentage = Math.round(completePercentage)

  return (
    <ul>
      <li>Total Items: {totalOfAllItems}</li>
      <li>Items Completed: {totalComplete}</li>
      <li>Items Not Complete: {totalUncomplete}</li>
      <li>Percent Completed: {formattedPercentage}</li>
    </ul>
  )
}