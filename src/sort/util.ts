export function swap<T> (data: T[], index: number, swapIndex: number): void {
  const val = data[index]
  data[index] = data[swapIndex]
  data[swapIndex] = val
}
