export function replaceItemAtIndex(arr, index, newItem) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
}

export function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}