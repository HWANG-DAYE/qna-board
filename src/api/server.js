const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// QnA 목록 가져오기
app.get('/api/qna', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM qna');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// QnA 추가
app.post('/api/qna', async (req, res) => {
    const { title, content } = req.body;
    try {
        const [result] = await db.query('INSERT INTO qna (title, content) VALUES (?, ?)', [title, content]);
        res.json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
