// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState('');
//   const [token, setToken] = useState('');
//   const sendData = async () => {
//     try {
//       const userId="98787987"
//       const response = await axios.post('http://localhost:3001/api/send-data', { userId });
//       setToken(response.data.token);
//     } catch (error) {
//       console.error('Error sending data:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={sendData}>Send Data</button>
//       <p>Response from server: {data}</p>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState('');

  const handleGenerateToken = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/generate-token', { userId });
      setToken(response.data.token);
    } catch (error) {
      console.error('Error generating token:', error);
    }
  };

  const handleFetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/fetch-data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleGenerateToken}>Generate Token</button>
      <button onClick={handleFetchData} disabled={!token}>
        Fetch Data
      </button>
      <p>Token: {token}</p>
      <p>Data: {data}</p>
    </div>
  );
}

export default App;





























// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [userId, setUserId] = useState('');
//   const [token, setToken] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       console.log("FUn Called")
//       const userId="52343655"
//       const response = await axios.post('http://localhost:5000/login', { userId });
//       console.log("First");
//       setToken(response.data.token);
//       console.log("second");
//       setMessage('');
//       console.log("After Fun Called");
//     } catch (error) {
//       setMessage('Error logging in.');
//     }
//   };

//   const handleSecureData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/secure-data', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage('Unauthorized.');
//     }
//   };

//   return (
//     <div>
//       <h1>JWT Token Example</h1>
//       <div>
//         <label>User ID: </label>
//         <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       {token && (
//         <div>
//           <p>Token: {token}</p>
//           <button onClick={handleSecureData}>Get Secure Data</button>
//           <p>{message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
