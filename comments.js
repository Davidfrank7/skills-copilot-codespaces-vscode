// Create web server
// 1. npm i express
// 2. npm i cors
// 3. npm i axios

// 1. import express
const express = require('express');
// 2. import cors
const cors = require('cors');
// 3. import axios
const axios = require('axios');

// 4. create web server
const app = express();
// 5. use cors
app.use(cors());
// 6. use json
app.use(express.json());

// 7. GET /comments
// 8. return comments
app.get('/comments', async (req, res) => {
    // 9. get comments from jsonplaceholder
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    // 10. return comments
    res.send(response.data);
});

// 11. POST /comments
// 12. create comment
app.post('/comments', async (req, res) => {
    // 13. get comment from request body
    const comment = req.body;
    // 14. create comment
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', comment);
    // 15. return comment
    res.send(response.data);
});

// 16. PUT /comments/:id
// 17. update comment
app.put('/comments/:id', async (req, res) => {
    // 18. get id from request params
    const id = req.params.id;
    // 19. get comment from request body
    const comment = req.body;
    // 20. update comment
    const response = await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, comment);
    // 21. return comment
    res.send(response.data);
});

// 22. DELETE /comments/:id
// 23. delete comment
app.delete('/comments/:id', async (req, res) => {
    // 24. get id from request params
    const id = req.params.id;
    // 25. delete comment
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
    // 26. return comment
    res.send(response.data);
});

// 27. listen on port 4000
app.listen(4000, () => console.log('Listening on port 4000'));