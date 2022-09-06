import { ISort } from './interface'
import { swap } from './util'

const mergeSort: ISort<number> = (data) => {
  const _mergeSort = (param: number[], start: number, end: number): any => {
    if (param.length === 0 || end <= start) return
    let left = start; let right = end + 1
    while (true) {
      while (param[++left] < param[start]) {
        if (left >= end) break
      }
      while (param[--right] > param[start]) {
        if (right <= start) break
      }
      if (left >= right) break
      swap(param, left, right)
    }
    swap(param, start, right)
    _mergeSort(data, start, right - 1)
    _mergeSort(data, right + 1, end)
  }

  _mergeSort(data, 0, data.length - 1)
}

export default mergeSort
