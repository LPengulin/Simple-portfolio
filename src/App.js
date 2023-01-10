import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import MoveCamOnScroll from './components/MoveCamOnScroll/MoveCamOnScroll';
import { OrbitControls } from '@react-three/drei';
import ExpandableBar from './components/Navbar/ExpandableBar';
import Hero from './components/Hero/Hero';

function App() {

  const cameraRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-2xl w-screen">
    <Canvas className='test1' id='webgl' style={{
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -10,
    }}>
      <MoveCamOnScroll />
      <Stars radius={30} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      
    </Canvas>
      <header className='z-10'
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      >
        <Navbar />
        <div className='flex justify-center'>
          <ExpandableBar isHovered={isHovered}/>
        </div>
      </header>

      <main>
        <section className='h-screen'>
          <Hero />
        </section>
        <section className='h-screen'>
          Hero
        </section>
        <section className='h-screen'>
          Hero
        </section>
      </main>
    </div>
  );
}

export default App;
