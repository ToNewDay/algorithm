import { ISort } from './interface'
import { swap } from './util'

const insertSort: ISort<number> = (data) => {
  for (let i = 1; i < data?.length; i++) {
    for (let j = i; j > 0; j--) {
      if (data[j] >= data[j - 1]) {
        break
      }
      swap(data, j, j - 1)
    }
  }
}

export default insertSort
