import './App.css';
import Cv from './pages/Cv/Cv';
import { Routes, Route} from "react-router-dom"
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Counter from './components/Counter/Counter'
import Main from './components/Main/Main'
import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo';
import Article from './pages/Article/Article';
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import Mousemove from './pages/Mousemove/Mousemove';
import StyleGeneral from './pages/StyleGeneral/StyleGeneral'; 
import StyleSepare from './pages/StyleSepare/StyleSepare';
import StyleBackTick from './pages/StyleBackTick/StyleBackTick';
import StyleFonction from './pages/StyleFonction/StyleFonction';
import ApiGeneral from './pages/ApiGeneral/ApiGeneral';
import AxiosGet from './pages/AxiosGet/AxiosGet';
import AxiosPost from './pages/AxiosPost/AxiosPost';
import GetArticle from './pages/GetArticle/GetArticle';
import GetArticleById from './pages/GetArticleById/GetArticleById';
import AddArticle from './pages/AddArticle/AddArticle';
import DeletArticle from './pages/DeletArticle/DeletArticle';
import RouterGeneral from './pages/RouterGeneral/RouterGeneral';
import RouteDyn from './pages/RouteDyn/RouteDyn';
import LinkExplication from './pages/LinkExplcation/LinkExplication';
import UseLocation from './pages/UseLocation/UseLocation';

function App() {
return (
<Routes>
<Route index element={<Cv />} />
<Route path="/cv" element={<Cv />} />
<Route path="/blog" element={<Blog />} />
<Route path="/Counter" element={<Counter />} />
<Route path="/useEffectCompo" element={<UseEffectCompo />} />
<Route path="/main" element={<Main />} />
<Route path="/Article/:id" element={<Article />} />
<Route path="*" element={<PageError />} />
<Route path="/SetIntervalCompo" element={<SetIntervalCompo/>}/>
<Route path="/Mousemove" element={<Mousemove/>} />
<Route path="/StyleGeneral" element={<StyleGeneral/>} />
<Route path="/StyleSepare" element={<StyleSepare/>} />
<Route path="/StyleBackTick" element={<StyleBackTick/>} /> 
<Route path="/StyleFonction" element={<StyleFonction/>} />
<Route path="/ApiGeneral" element={<ApiGeneral/>} />
<Route path="/AxiosGet" element={<AxiosGet/>} />
<Route path='/AxiosPost' element={<AxiosPost/>}/>
<Route path='/GetArticle' element={<GetArticle/>} />
<Route path='/GetArticleById' element={<GetArticleById/>} />
<Route path='/AddArticle' element={<AddArticle/>} />
<Route path='/DeletArticle' element={<DeletArticle/>} />
<Route path="/RouterGeneral" element={<RouterGeneral/>} />
<Route path='/RouteDyn' element={<RouteDyn/>} />
<Route path="/LinkExplication" element={<LinkExplication/>} />
<Route path='/UseLocation' element={<UseLocation/>} />
</Routes>
);
}

export default App;