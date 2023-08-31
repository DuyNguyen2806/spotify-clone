import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';

function App() {
  return (
    <div className="App " >
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
        <DetailSong/>
        <ListSongs/>
      </div>
    </div>
  );
}

export default App;
