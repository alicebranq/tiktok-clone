import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
        <Video 
          likes={100}
          message={2}
          shares={2}
          name='{}' // receberá alteração;chaves vazias dariam erro
          description='{}'
          music='{}'
          url={url}
        />
      </div>
    </div>
  );
}

export default App;
