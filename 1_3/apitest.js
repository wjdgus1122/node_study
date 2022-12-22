// fetch("http://localhost:3000/comments")
//     .then((response) => response.json())
//     .then((json) => console.log(json))

// fetch("http://localhost:3000/comments/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json))

// fetch("http://localhost:3000/comments?postId=1")
//     .then((response) => response.json())
//     .then((json)=>console.log(json))



// fetch("http://localhost:3000/posts", {
// 	method : "POST",
// 	body : JSON.stringify({
// 		//전송할 데이터
// 		title : "The Great",
// 		author : "Jeremy"
// 	}), 
// 	headers : {
// 		// 헤더 값 정의
// 		"content-type" : "application/json; charset=UTF-8", // content-type 정의
// }
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


fetch("http://localhost:3000/posts/3", {
    method : "DELETE"
})

// fetch("http://localhost:3000/posts/2", {
//     method : "PUT",
//     body : JSON.stringify({
//         id : "2",
//         title : "The Great Kang",
//         author : "Kang",
//     }),
//     headers : {
//         "content-type" : "application/json; charset=UTF-8",
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json))