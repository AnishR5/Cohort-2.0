function findLargestElement(numbers) {
    return numbers.sort((a,b)=> a-b)[numbers.length-1]
}
const nums=[3, 7, 2, 9, 1]
console.log(findLargestElement(nums))