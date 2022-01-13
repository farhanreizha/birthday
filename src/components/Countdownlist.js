import { useEffect, useState } from 'react';
import Hope from './Hope';
import WaterDrop from './WaterDrop';

export default function Countdownlist({ countdown, setCountdown }) {
  const [time, setTime] = useState(0);
  const [birthDay, setBirthDay] = useState('Coming Soon');
  const [name, setName] = useState('');

  useEffect(() => {
    let countDownDate = new Date('Jul 14, 2022 00:00:00').getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(
        <div className='flex gap-5'>
          <WaterDrop>{days}d</WaterDrop>
          <WaterDrop>{hour}h</WaterDrop>
          <WaterDrop>{minutes}m</WaterDrop>
          <WaterDrop>{second}s</WaterDrop>
        </div>
      );
      if (distance < 0) {
        clearInterval(x);
        setTime(<Hope />);
        setCountdown(true);
        setBirthDay('🎉 Happy Birthday 🎉');
        setName('💕 Dini Mulyani 💕');
        setTimeout(() => {
          setCountdown(false);
        }, 15000);
      }
    }, 1000);
  }, [setCountdown]);
  return (
    <div className='flex-row text-center space-y-2'>
      <div className='relative font-black text-xl md:text-5xl'>{birthDay}</div>
      <div className='relative font-black text-xl md:text-3xl'>{name}</div>
      <div className='relative md:text-5xl'>{time}</div>
    </div>
  );
}
