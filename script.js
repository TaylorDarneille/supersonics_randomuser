// console.log("Hello from Fetch Practice!")

// const redditEndpoint = 'https://www.reddit.com/search.json?q=kittens'

// fetch(redditEndpoint)
// .then((fetchObj)=>{
//     console.log("Here is the fetch object:", fetchObj)
//     return fetchObj.json()
// })
// .then((jsonData)=>{
//     console.log("Here is the json Data:", jsonData)
// })
// .catch((error)=>{
//     console.log("oh no, you did NOT make fetch happen")
//     console.log(error)
// })

// console.log("Just fired the AJAX request")

// // const taylorsFunction = (bands) => {
// //     bands.forEach((band)=>{
// //         console.log(band)
// //     })
// // }

// // taylorsFunction(['Hot Mulligan', 'Local Natives'])

const addPerson = (person) => {
    // let peopleList = document.getElementById('peopleList')
    let newPerson = document.createElement('li')
    newPerson.textContent = `${person.name.first} ${person.name.last}`
    peopleList.appendChild(newPerson)
}

const randomUserEndpoint = 'https://randomuser.me/api/?results=10'

fetch(randomUserEndpoint)
.then((fetchedUsers)=>{
    return fetchedUsers.json()
})
.then((jsonUsers)=>{
    jsonUsers.results.forEach(addPerson)
    // console.log(jsonUsers.results)
})
.catch((err)=>{
    console.log('Failed to fetch users!', err)
})