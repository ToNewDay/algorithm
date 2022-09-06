import { ISort } from './interface'
import { swap } from './util'

const choiceSort: ISort<number> = (data) => {
  for (let i = 0; i < data?.length; i++) {
    let minIndex = i
    for (let j = i; j < data?.length; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j
      }
    }
    swap(data, i, minIndex)
  }
}

export default choiceSort
