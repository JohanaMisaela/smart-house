"use client"
import React, { useState, useEffect, useReducer } from 'react';
import Link from 'next/link';
import HomeManager from '@/singleton/HomeSingleton';
import { reducer, initialState, Action } from '@/State/reducer';

const homeManager = HomeManager.getInstance();

const HomePage: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const checkDoorState = async () => {
      const response = await fetch('/api/door');
      const data = await response.json();
      if (data.isDoorOpen) {
        dispatch({ type: 'openDoor' });
      } else {
        dispatch({ type: 'closeDoor' });
      }
    };

    checkDoorState();
    const intervalId = setInterval(checkDoorState, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (state.isDoorOpen) {
      const timer = setTimeout(() => {
        dispatch({ type: 'showArrow' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.isDoorOpen]);

  return (
    <main>
      <div className="flex justify-center items-center h-screen relative">
        <img src="/maison.png" alt="maison" className="absolute" style={{ width: '50vw', height: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <img src="/porte.png" alt="porte" className={`absolute door ${state.isDoorOpen ? 'open' : ''}`} style={{ top: 'calc(50% + 7.9vw)', left: 'calc(50% + 0.38vw)', width: '5vw', height: 'auto' }} />
        {state.showArrow && (
          <Link href="/interieur">
            <button className="absolute fade-in animation opacity-0 duration-1000" style={{ top: 'calc(50% + 8vw)', left: 'calc(50% + -1.5vw)', width: '4vw', height: 'auto'}}>Entrer</button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default HomePage;
