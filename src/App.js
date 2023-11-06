import './App.css';
import Landingpage from './Components/Landingpage'
import bg from './Components/assets/background.svg'
function App() {
  return (
    <div className="App relative h-screen">
      <div className='relative w-full h-screen'>
        <img src={bg} alt='background' className='w-full h-full -z-10 object-cover' />
      </div>
      <div className='w-full absolute z-10 top-0 left-0 h-full'>
        <Landingpage />
      </div>
    </div>
  );
}

export default App;
