import MainBody from './component/MainBody';
import Sidebar from './component/Sidebar';
import './scss/index.scss';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
