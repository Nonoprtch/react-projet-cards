import './App.css';
import Cv from './pages/Cv/Cv'; 
import { Routes, Route} from "react-router-dom"
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Counter from './components/Counter/Counter'
import Main from './components/Main/Main'
import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo';

function App() {
 <Main/> 

  return (
      <Routes>
        <Route index element={<Cv />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/useEffectCompo" element={<UseEffectCompo />} />
        <Route path="/main" element={<Main/>} />
        
        <Route path="*" element={<PageError />} />
      </Routes>
  );
}

export default App;