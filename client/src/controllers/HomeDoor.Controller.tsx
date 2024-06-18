import React, { useState, useEffect } from 'react';

const ButtonControl: React.FC = () => {
  const [pin, setPin] = useState('');
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  useEffect(() => {
    // Fetch l'initial door state
    const fetchDoorState = async () => {
      const response = await fetch('/api/door');
      const data = await response.json();
      setIsDoorOpen(data.isDoorOpen);
    };
    fetchDoorState();
  }, []);

  const handlePinSubmit = async (action: 'open' | 'close') => {
    try {
      const body = action === 'open' ? { pin, action } : { action };
      const response = await fetch('/api/door', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        if (data.isDoorOpen && action === 'open') {
          alert('Porte ouverte avec succès !');
        } else if (!data.isDoorOpen && action === 'close') {
          alert('Porte fermée avec succès !');
        } else {
          alert('Erreur lors de l\'opération sur la porte.');
        }
        setIsDoorOpen(data.isDoorOpen);
      } else {
        alert(`Erreur : ${data.message}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
    setPin('');
  };

  return (
    <div>
      <h2>Contrôle de la Porte</h2>
      {!isDoorOpen && (
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="border-2 border-black px-4 py-1 rounded-lg mr-3"
        />
      )}
      <button
        onClick={() => handlePinSubmit(isDoorOpen ? 'close' : 'open')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {isDoorOpen ? 'Fermer la Porte' : 'Ouvrir la Porte'}
      </button>
    </div>
  );
};

export default ButtonControl;
