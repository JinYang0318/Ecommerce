import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/productList" element={<ProductList/>}/>
      </Routes>
    </Router>
  );
}
export default App;