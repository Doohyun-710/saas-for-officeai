const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('OfficeAI 백엔드 서버입니다!');
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});

