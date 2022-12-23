// const { application } = require('express')
// const express = require('express')
// // const bodyParser = require('body-parser')
// const customerRoute = require('./routes/customer')
// const productRoute = require('./routes/product')

// const app = express()
// const port = 3000 //서버 포트 번호


// app.get('/', (rep, res) => {
//     res.send('Hello World!')
// }) //클라이언트에서 HTTP 요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트

// // app.get('/customer', function (req, res){
// //     res.send('get 요청에 대한 응답')
// // })

// // app.post('/customer', function (req, res) {
// //     res.send('post 요청에 대한 응답')
// // })

// // app.all('/customer', function (req, res) {
// //     res.send('HTTP 요청 메소드 종류에 상관없이 응답')
// // })

// // // 클라이언트에서 요청한 라우트 경로가 abcd, abxcd, abanycd, ab123cd 등과 일치
// // // 'ab*cd'는 문자 'ab'와 문자 'cd' 사이에 문자가 없거나 혹은 어떤 문자도 올 수 있다는 것을 의미
// // app.get('/ab*cd', function(req, res) {
// //     res.send('ab*cd')
// // })

// // // 클라이언트에서 요청한 라우트 경로가 abe 혹은 abcde와 일치
// // // '(cd)?'는 문자 'cd'가 0번 혹은 1번 있을 수 있음을 의미
// // app.get('/ab(cd)?e', function(req, res){
// //     res.send('ab(cd)?e')
// // })

// // // 클라이언트에서 요청한 라우트 경로에 'a'가 포함되어 있는 경우
// // app.get('/a/', function (req, res) {
// //     res.send('/a/');
// // })

// // // 클라이언트에서 요청한 라우트 경로가 문자 'insert'로 시작하는 경우
// // // insertCustomer, insertProduct
// // app.get('/^insert/', function(req, res){
// //     res.send('/^insert/')
// // })


// // app.get('/example', function(req, res, next) {
// //     console.log('첫번째 콜백 함수');
// //     next();
// // }, function (req, res){
// //     res.send('두번째 콜백함수')
// // })

// // const ex0 = function (req, res, next){
// //     console.log("첫 번째 콜백 함수")
// //     next();
// // }
// // const ex1 = function (req, res, next){
// //     console.log("두 번째 콜백 함수")
// //     next();
// // }
// // const ex2 = function (req, res){
// //     console.log("세 번째 콜백 함수")
// // }

// // app.get("/example", [ex0, ex1, ex2])

// // app.route('/customer')
// //     .get(function(req, res){ // HTTP 메소드 GET 요청에 대한 조회 처리
// //         res.send('고객 정보 조회')
// //     })
// //     .post(function(req, res){ // HTTP 메소드 POST 요청에 대한 저장 처리
// //         res.send('신규 고객 추가')
// //     })
// //     .put(function(req, res){ // HTTP 메소드 PUT 요청에 대한 수정 처리
// //         res.send('고객 정보 수정')
// //     })
// //     .delete(function(req, res){ // HTTP 메소드 DELETE 요청에 대한 삭제 처리
// //         res.send('고객 정보 삭제')
// //     })


// app.use(express.json({
//     limit : "50mb" // 최대 50메가
// })); // 클라이언트 요청 body를 json으로 파싱 처리

// // parse application/x-www-form-urlencoded
// // app.use(bodyParser.urlencoded({extended : false}))


// // app.listen() 함수를 사용해서 서버를 실행시킴.
// // 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있음. 
// app.listen(port , () => {
//     console.log(`서버가 실행됩니다. http://localhost:${port}`)
// })

// app.use('/customer', customerRoute); // customer 라우트를 추가하고 기본 경로로 /customer 사용
// app.use('/product', productRoute); // product 라우트를 추가하고 기본 경로로 /product 사용
// // app.use(express.static('public')); // public 폴더에 있는 모든 정적 파일을 URL로 제공할 수 있게 됨. 
// app.use('/static', express.static('public'));

// // parse application/json
// // app.use(bodyParser.json())



// const express = require('express')
// const session = require('express-session')
// const fileStore = require('session-file-store')(session);
// const app = express();

// app.use(session({
// 	secret : 'secret key', // 암호화하는데 쓰일 키
// 	resave : false, // 세션에 변경 사항이 없어도 항상 다시 저장할지 여부
// 	saveUninitialized : true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
// 	cookie : { // 세션 쿠키 설정(세션 관리 시 클라이언트에 보내는 쿠키)
// 		httpOnly : true, // true이면 클라이언트 자바스크립트에서 document.cooie로 쿠키 정보를 볼 수 없음
// 		secure : true, // true이면 https 환경에서만 쿠키 정보를 주고 받도록 처리
// 		maxAge : 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
// 	},
// 	store : new fileStore() // 세션 저장소로 fileStore 사용
// }));

// app.get('/', (req, res, next) => {
//     console.log(req.session); // 세션 정보 출력
//     res.send(req.session)
// })

// // 로그인 요청 시 사용자 정보 확인 후 세션에 사용자 정보 저장
// app.post('/login', (req, res, next) => {
//     const {email, pw} = req.body.param;
//     // 데이터베이스의 사용자 테이블에서 로그인 인증 처리 코드 작성
//     // 사용자가 존재하면(로그인 처리가 성공하면)
//     req.session.email = email; // 세션에 사용자 이메일 정보 저장
//     req.session.is_logined = true; // 세션에 로그인 여부 저장
//     req.session.save(err => { // 세션 저장
//         if(err) throw err;
//         res.redirect('/home') // 로그인 후 홈화면으로 이동
//     })
// })

// // 로그아웃 요청 시 세션 삭제 후 로그인 페이지로 이동
// app.post('/logout', (req, res, next) => {
//     req.session.destroy(); // destory() 함수를 사용해서 세션 삭제
//     res.redirect('/login') // 로그인 페이지로
// })

// app.listen(3000, () => {
// 	console.log("3000번 포트로 서버를 실행했습니다.")
// })