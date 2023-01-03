const express = require('express');
const sequelize = require('./models').sequelize
const app = express();

sequelize.sync(); // Sequelize 객체의 sync() 함수를 호출해서 모델에 정의한 테이블이 없을 때 생성해 줍니다. 

const {customers} = require('./models');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, () => {
    // 3000번 포트로 웹 서버 실행
    console.log('Server started. port 3000');
});

app.get('/api/customers', async (req,res) => {
    const customersData = await customers.findAll();
    console.log(customersData);
    res.send(customersData);
});

app.post('/api/customer/insert', async (req,res) => {
    const {name, email, phone, address} = req.body.params;
    const result = await customers.create({name : name, email : email, phone : phone, address : address});
    res.send(result); // 결과를 클라이언트로 보냄
});

app.put('/api/customer/update', async (req,res) => {
    const result = await customers.update(req.body.params[0], {
        where : {id: req.body.params[1]}
    });
    res.send(result); // 결과를 클라이언트로 보냄
});

app.delete('/api/customer/delete/:id', async (req,res) => {
    const {id} = req.params; // 라우트 경로의 :id에 매핑되는 값
    const result = await customers.destroy({
        where : {id : id}
    });
    res.send(result);
});

