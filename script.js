const house = [{ num: 45, floor: 1, people: 2 },
{ num: 46, floor: 1, people: 2 },
{ num: 47, floor: 2, people: 6 },
{ num: 48, floor: 2, people: 3 },
{ num: 49, floor: 3, people: 1 },
{ num: 50, floor: 3, people: 4 },
{ num: 51, floor: 3, people: 1 },
{ num: 52, floor: 4, people: 2 },
{ num: 53, floor: 4, people: 5 },]
let threepeopleArr = [];
for  (let i = 0; i < house.length; i++){
    if (house[i].people < 3) threepeopleArr.push(house[i].num)
}
console.log(threepeopleArr)
