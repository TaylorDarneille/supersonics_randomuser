console.log("Hello from Fetch Practice!")

const redditEndpoint = 'https://www.reddit.com/search.json?q=kittens'

fetch(redditEndpoint)
.then((fetchObj)=>{
    console.log("Here is the fetch object:", fetchObj)
    return fetchObj.json()
})
.then((jsonData)=>{
    console.log("Here is the json Data:", jsonData)
})
.catch((error)=>{
    console.log("oh no, you did NOT make fetch happen")
    console.log(error)
})

console.log("Just fired the AJAX request")

// const taylorsFunction = (bands) => {
//     bands.forEach((band)=>{
//         console.log(band)
//     })
// }

// taylorsFunction(['Hot Mulligan', 'Local Natives'])