import { selector } from 'recoil'
import { filterAtom, toDoListAtom } from '../atoms'

/* 
  filteredToDoList internally keeps track of two dependencies:
    (1) toDoListAtom
    (2) filterAtom
  so that it re-runs if either of those change.
 */
export const filteredToDoList = selector({
  key: 'filteredToDoList',
  get: ({get}) => {
    const list = get(toDoListAtom)
    const filter = get(filterAtom)

    switch (filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete)
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete)
      default:
        return list
    }
  }
})

export const stats = selector({
  key: 'stats',
  get: ({get}) => {
    const list = get(toDoListAtom)
    const totalOfAllItems = list.length
    const totalComplete = list.filter(item => item.isComplete).length
    const totalUncomplete = totalOfAllItems - totalComplete
    const completePercentage = totalOfAllItems === 0 ? 0 : (totalComplete / totalOfAllItems) * 100

    return {
      totalOfAllItems,
      totalComplete,
      totalUncomplete,
      completePercentage
    }
  }
})