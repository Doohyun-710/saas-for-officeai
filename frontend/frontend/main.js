document.getElementById('submitBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;

  fetch('http://localhost:3000/summarize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: inputText })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('result').innerText = data.summary;
  });
});

app.post('/summarize', (req, res) => {
  const { text } = req.body;
  res.json({ summary: `요약 결과입니다: ${text.slice(0, 20)}...` });
});