import React, { useState } from 'react';

const DropdownPage = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const leftDropdowns = Array.from({ length: 10 }, (_, i) => i + 1);
  const rightDropdowns = Array.from({ length: 10 }, (_, i) => i + 11);
  
  // Full list of hero names
  const options = [
    'Miya', 'Balmond', 'Saber', 'Alice', 'Nana', 'Tigreal', 'Alucard', 'Karina', 'Akai', 'Franco',
    'Bane', 'Bruno', 'Clint', 'Rafaela', 'Eudora', 'Zilong', 'Fanny', 'Layla', 'Minotaur', 'Lolita',
    'Hayabusa', 'Freya', 'Gord', 'Natalia', 'Kagura', 'Chou', 'Sun', 'Alpha', 'Ruby', 'Yi Sun-shin',
    'Moskov', 'Johnson', 'Cyclops', 'Estes', 'Hilda', 'Aurora', 'Lapu-Lapu', 'Vexana', 'Roger', 'Karrie',
    'Gatotkaca', 'Harley', 'Irithel', 'Grock', 'Argus', 'Odette', 'Lancelot', 'Diggie', 'Hylos', 'Zhask',
    'Helcurt', 'Pharsa', 'Lesley', 'Jawhead', 'Angela', 'Gusion', 'Valir', 'Martis', 'Uranus', 'Hanabi',
    'Chang’e', 'Kaja', 'Selena', 'Aldous', 'Claude', 'Vale', 'Leomord', 'Lunox', 'Hanzo', 'Belerick',
    'Kimmy', 'Thamuz', 'Harith', 'Minsitthar', 'Kadita', 'Faramis', 'Badang', 'Khufra', 'Granger', 'Guinevere',
    'Esmeralda', 'Terizla', 'X.Borg', 'Ling', 'Dyrroth', 'Lylia', 'Baxia', 'Masha', 'Wanwan', 'Silvanna',
    'Cecilion', 'Carmilla', 'Atlas', 'Popol and Kupa', 'Yu Zhong', 'Luo Yi', 'Khaleed', 'Benedetta', 'Barats', 
    'Brody', 'Yve', 'Mathilda', 'Paquito', 'Gloo', 'Beatrix', 'Phoveus', 'Natan', 'Aulus', 'Aamon', 
    'Valentina', 'Edith', 'Floryn', 'Yin', 'Melissa', 'Xavier', 'Julian', 'Fredrinn', 'Joy', 'Novaria', 
    'Arlott', 'Ixia', 'Nolan', 'Cici','Zhuxin'
  ];

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    const imageUrl = `${selectedOption}.png`;
    setSelectedImage(imageUrl);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Left Column */}
      <div style={{ width: '45%' }}>
        {leftDropdowns.map((num) => (
          <div key={num} style={{ marginBottom: '10px' }}>
            <label>{`Dropdown ${num}`}</label>
            <select onChange={handleDropdownChange}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div style={{ width: '45%' }}>
        {rightDropdowns.map((num) => (
          <div key={num} style={{ marginBottom: '10px' }}>
            <label>{`Dropdown ${num}`}</label>
            <select onChange={handleDropdownChange}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Display Selected Image */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {selectedImage && (
          <img src={selectedImage} alt={selectedImage} style={{ maxWidth: '300px' }} />
        )}
      </div>
    </div>
  );
};

export default DropdownPage;
