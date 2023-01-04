const mongoose = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://root:1234@127.0.0.1:27017/admin', {
        dbName : 'dev', 
    }, (error)=> {
        if(error){
            console.error('MongoDB 연결 에러', error);
        }else{
            console.log('MongoDB 연결 성공', '127.0.0.1:27017/admin')
        }
    });
};

mongoose.connection.on('error', (error) => { // MongoDB 연결시 에러가 있을 때 발생하는 이벤트에 대한 리스너
    console.error('MongoDB 연결 에러', error);
});

mongoose.connection.on('disconnected', () => { // MongoDB 연결이 종료되었을 때 발생하는 이벤트에 대한 리스너
    console.error('MongoDB 연결이 종료되어 연결을 재시도합니다.');
    connect()
});

module.exports = {
    connect
}