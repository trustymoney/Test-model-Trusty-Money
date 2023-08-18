// const express = require('express');
// const jwt = require('jsonwebtoken');
// const cors=require('cors');

// const app = express();
// app.use(cors)
// const port = 5000;
// const secretKey = 'your-secret-key'; // Change this to a secure secret key

// app.use(express.json());

// // POST request to set JWT token
// app.post('/login', (req, res) => {
//   console.log("kbjb");
  // const { userId } = req.body;

  // if (userId) {
  //   const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  //   console.log(token);
  //   res.json({ token });
  // } else {
  //   res.status(400).json({ message: 'User ID is required.' });
  // }
// });

// // GET request to verify JWT token
// app.get('/secure-data', (req, res) => {
//   const token = req.header('Authorization');
//   console.log("Inside Get")
//   if (!token) {
//     return res.status(401).json({ message: 'Authorization header missing.' });
//   }

//   try {
//     const decoded = jwt.verify(token, secretKey);
//     const userId = decoded.userId;
//     res.json({ message: 'Access granted.', userId });
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Express server is running on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
const secretKey="hgbkhkhn"
app.post('/api/generate-token', (req, res) => {
  const userId = req.body.userId;
  const token=jwt.sign({userId},secretKey,{expiresIn:'1h'});
  console.log(token);
  // You can process the received data here
  // const responseData = 'Data received successfully';
  res.json({token});
});
const  verifyToken = (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    const user=userId;
    var data= Model.findOne({objectID:user});
    n
  });
};

app.get('/api/fetch-data', (req, res) => {
  // Use req.userId to fetch data specific to the user
  verifyToken(req,res);
  const data = `Data fetched for user ${req.userId}`;

  res.json(data);
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
