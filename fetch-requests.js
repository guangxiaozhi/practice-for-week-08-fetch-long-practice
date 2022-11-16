/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
// const string = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery";
// const body = string.split('&').map((keyValuePair) => keyValuePair.split('='))
// .map(([key,value]) =>[key, value.replace(/\+/g, ' ')])
// .map(([key, value])=>[key, decodeURIComponent(value)])
// .reduce((acc,[key, value])=>{
//   acc[key] = value;
//   return acc;
// },{});


fetch('/products',{
  method:"POST",
  headers:{
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: 'name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery',
})


/* ============================== Phase 2 ============================== */

// Your code here

fetch('/products').then(res => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    console.log(res.url);
})


/* ============================== Phase 3 ============================== */

// Your code here
fetch('/products',{
  method:'POST',
  headers:{
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body:new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  }),
})

/* ============================== Phase 4 ============================== */
function addComment(comment, starRating) {
    return fetch('/products/best-selling', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            comment: comment,
            starRating: starRating
        })
    })
}
