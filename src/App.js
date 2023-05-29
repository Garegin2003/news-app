import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewsList from './store/components/NewsList/NewsList';
import FavoritesList from './store/components/FavoritesList/FavoritesList';

function App() {
  return (
    <Routes>
      <Route  path="/">
        <Route index element = {<NewsList />} />
        <Route  path="favorites" element={<FavoritesList />} />
      </Route>
    </Routes>
  );
}

export default App;
