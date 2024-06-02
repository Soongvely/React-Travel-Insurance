// express 모듈 호출
const express = require('express');
const path = require('path');
const app = express();

// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});

app.use(express.static(path.join(__dirname, 'jinsol/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/jinsol/build/index.html'));
});