const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]


if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}

console.log(bag)
console.log("Added " + nextItem)