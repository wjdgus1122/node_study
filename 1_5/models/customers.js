'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model { // Sequelize 모델을 상속받아서 customers 클래스 생성

    // models/index.js에서 자동으로 호출되는 함수입니다.
    // 테이블 간에 외래키를 통해서 연관 관계를 설정하는 것과 같이 필요한 경우 현재 모델에서 다른 모델과의 연관관계를 정의함

    static associate(models) {
      // 전체 모델을 파라미터로 받아서 현재 모델과 연관 관계를 정의해야 하는 모델이 있다면 여기서 정의해야함. 
    }
  }
  customers.init({ // 테이블의 컬럼에 해당하는 필드를 정의
    id: {type : DataTypes.INTEGER, allowNull : false, primaryKey : true},
    name: {type : DataTypes.STRING, allowNull : false},
    email: {type : DataTypes.STRING, allowNull : false},
    phone: {type : DataTypes.STRING, allowNull : false},
    address: {type : DataTypes.STRING, allowNull : true},
  }, {
    sequelize,
    modelName: 'customers', // 모델 이름
    timestamps : false, // createAt, updateAt 컬럼 없음
  });
  return customers;
};