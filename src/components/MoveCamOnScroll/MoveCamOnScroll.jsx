import React from 'react'
import { useState, useEffect } from 'react'
import { useFrame, Canvas, useThree } from '@react-three/fiber';

const MoveCamOnScroll = () => {

    const {camera} = useThree();

    const [scrollAmount, setScrollAmount] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function onScroll() {
            setScrollAmount(window.pageYOffset);
        }

        function handleMouseMove(event) {
            setMousePosition({x: event.clientX, y: event.clientY});
        }
        window.addEventListener('scroll', onScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('mousemove', handleMouseMove);
    }
    }, []);

    useFrame(state => {
        camera.position.z = scrollAmount / 200;
        camera.position.x = (mousePosition.x - camera.position.x) * 0.005;
        camera.position.y = (mousePosition.y - camera.position.y) * 0.005;
       
        
    });

  return null;
}

export default MoveCamOnScroll