import './App.css';
import { useRoutes } from 'react-router-dom';
import './bootstrap/bootstrap.min.css'
import { routes } from './routes';


function App() {
  const content = useRoutes(routes);
  return (
  
    <div className="App">
    {content}
    </div>
  );
}

export default App;