Chương mới  Unit Test Javascript

Cài đặt vào visual studio code 3 extention mới:
Jest
Jest Runner
Jest Snippets

==================================
để sử dụng cách import es6 thì cài đặt thêm 
yarn add --dev babel-jest @babel/core @babel/preset-env

sau đó tạo 1 file mới babel.config.js 
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

==================================
để kiểm tra unit test có coverage 
thay đổi trong pagekage.json
"test": "npm run test" --> "test": "jest --coverage"

mở terminal chạy lệnh : npm run test