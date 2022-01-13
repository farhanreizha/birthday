import { useState } from 'react';
import './App.css';
import Countdownlist from './components/Countdownlist';
import Confetti from 'confetti-react';
import ParticlesBg from 'particles-bg';

function App() {
  const [countdown, setCountdown] = useState(false);
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-tr from-orange-500 via-amber-600 to-yellow-400 text-white'>
      {countdown ? (
        <Confetti className='h-screen' numberOfPieces={200} />
      ) : 
      <ParticlesBg type='color' num={2} bg={{ position: 'absolute', zIndex: 0 }} />
}
      <Countdownlist setCountdown={setCountdown} countdown={countdown} />
    </div>
  );
}

export default App;
