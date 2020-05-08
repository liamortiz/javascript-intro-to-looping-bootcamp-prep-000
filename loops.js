function forLoop(arr) {
  for (let i = 1; i < 25; i++) {
    arr.push(`I am ${i} strange loop${i === 1 ? ' ' : 's'}.`)
  }
  return arr
}