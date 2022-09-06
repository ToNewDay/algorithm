import { ISort } from './interface'
import { swap } from './util'

const shellSort: ISort<number> = (data) => {
  let h = Math.floor(data.length / 3)
  while (h >= 1) {
    for (let j = h; j < data.length; j++) {
      for (let i = j; i >= h && data[i] < data[i - h]; i -= h) {
        swap(data, i, i - h)
      }
    }
    h = Math.floor(h / 3)
  }
}

export default shellSort
