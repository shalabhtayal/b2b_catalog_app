import React, { useState } from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <ProductList token={token} />}
    </div>
  );
}

export default App;
