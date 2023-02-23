import { Switch, Route } from 'react-router-dom';
import './App.css';
import P5 from './pages/P5';
import ReactFlow from './pages/ReactFlow';

export function MyRoute(props) {
  const { title } = props;
  if (title) {
    document.title = title;
  }
  return <Route {...props} />;
}

function App() {
  const list = [
    {
      path: '/',
      component: P5,
      title: 'P5',
    },
    {
      path: '/ReactFlow',
      component: ReactFlow,
      title: 'ReactFlow',
    },
  ];

  return (
    <div className="App">
      <Switch>
        {list.map((r) => (
          <MyRoute key={r?.path} {...r} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
