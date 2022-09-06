import { random, isEqual } from 'lodash'
import choiceSort from './choice-sort'
import insertSort from './insert-sort'
import shellSort from './shell-sort'
import quickSort from './quick-sort'

import { ISort } from './interface'

const _data = (new Array(100000)).fill('').map((_, n) => random(100000, 1, false))
const lodashTestData = [..._data]
const lodashStart = performance.now()
lodashTestData.sort((a, b) => a - b)
const lodashEnd = performance.now()
const lodashTime = lodashEnd - lodashStart

function testSort (fn: ISort<number>): void {
  const testData = [..._data]
  const start = performance.now()
  fn(testData)
  const fnEnd = performance.now()
  expect(isEqual(testData, lodashTestData)).toBe(true)
  console.log(`${fn.name} performace:${(fnEnd - start).toFixed(2)} ${((fnEnd - start) / (lodashTime)).toFixed(2)}`)
}

describe('test sort function', () => {
  // it('test choiceSort', () => {
  //   testSort(choiceSort)
  // })

  // it('test insertSort', () => {
  //   testSort(insertSort)
  // })

  it('test shellSort', () => {
    testSort(shellSort)
  })

  it('test quickSort', () => {
    testSort(quickSort)
  })
})
