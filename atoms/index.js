import { atom } from 'recoil'

export const toDoListAtom = atom({
  key: 'toDoListAtom',
  default: []
})

export const filterAtom = atom({
  key: 'filterAtom',
  default: 'Show All'
})