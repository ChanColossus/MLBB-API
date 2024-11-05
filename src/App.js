import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select'; // Import react-select
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedIGNs, setSelectedIGNs] = useState({});
  const [banImages, setBanImages] = useState({});
  const [banIGNs, setBanIGNs] = useState({});
  
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error(error));
  }, []);

  const options = [
    'Miya', 'Balmond', 'Saber', 'Alice', 'Nana', 'Tigreal', 'Alucard', 'Karina', 'Akai', 'Franco',
    'Bane', 'Bruno', 'Clint', 'Rafaela', 'Eudora', 'Zilong', 'Fanny', 'Layla', 'Minotaur', 'Lolita',
    'Hayabusa', 'Freya', 'Gord', 'Natalia', 'Kagura', 'Chou', 'Sun', 'Alpha', 'Ruby', 'Yi SunShin',
    'Moskov', 'Johnson', 'Cyclops', 'Estes', 'Hilda', 'Aurora', 'Lapu-Lapu', 'Vexana', 'Roger', 'Karrie',
    'Gatotkaca', 'Harley', 'Irithel', 'Grock', 'Argus', 'Odette', 'Lancelot', 'Diggie', 'Hylos', 'Zhask',
    'Helcurt', 'Pharsa', 'Lesley', 'Jawhead', 'Angela', 'Gusion', 'Valir', 'Martis', 'Uranus', 'Hanabi',
    'Change', 'Kaja', 'Selena', 'Aldous', 'Claude', 'Vale', 'Leomord', 'Lunox', 'Hanzo', 'Belerick',
    'Kimmy', 'Thamuz', 'Harith', 'Minsitthar', 'Kadita', 'Faramis', 'Badang', 'Khufra', 'Granger', 'Guinevere',
    'Esmeralda', 'Terizla', 'X.Borg', 'Ling', 'Dyrroth', 'Lylia', 'Baxia', 'Masha', 'Wanwan', 'Silvanna',
    'Cecilion', 'Carmilla', 'Atlas', 'Popol and Kupa', 'YuZhong', 'Luo Yi', 'Khaleed', 'Benedetta', 'Barats', 
    'Brody', 'Yve', 'Mathilda', 'Paquito', 'Gloo', 'Beatrix', 'Phoveus', 'Natan', 'Aulus', 'Aamon', 
    'Valentina', 'Edith', 'Floryn', 'Yin', 'Melissa', 'Xavier', 'Julian', 'Fredrinn', 'Joy', 'Novaria', 
    'Arlott', 'Ixia', 'Nolan', 'Cici','Zhuxin', 'Suyou'
  ];

  const formattedOptions = options.map(option => ({ value: option, label: option }));

  const handleDropdownChange = (selectedOption, cardNum) => {
    const selectedValue = selectedOption ? selectedOption.value : '';
    const imageUrl = selectedValue ? `/heroes3D/${selectedValue}.mp4` : '';
    setSelectedImages(prevState => ({ ...prevState, [cardNum]: imageUrl }));
    setSelectedIGNs(prevState => ({ ...prevState, [cardNum]: selectedValue }));
  };

  const handleBanDropdownChange = (selectedOption, banNum) => {
    const selectedValue = selectedOption ? selectedOption.value : '';
    const imageUrl = selectedValue ? `/bans/${selectedValue}.png` : ''; // Adjust path as needed
    setBanImages(prevState => ({ ...prevState, [banNum]: imageUrl }));
    setBanIGNs(prevState => ({ ...prevState, [banNum]: selectedValue }));
  };

  const handleReset = () => {
    setSelectedImages({});
    setSelectedIGNs({});
    setBanImages({});
    setBanIGNs({});
  };
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 100, // Set the maximum height
      overflowY: 'auto', // Add scroll if needed
    }),
  };
  return (
    <div className="App">
      <button onClick={handleReset} className="reset-button">Reset</button>

      <div className="dropdown-container">
        <div className="dropdown-group">
          {[1, 2, 3, 4, 5].map(num => (
            <div key={num} className="dropdown-wrapper" style={{backgroundColor:"blue", color:"white", fontSize:26}}>
              <label>{`Pick ${num}`}</label>
              <Select
                options={formattedOptions}
                onChange={(selectedOption) => handleDropdownChange(selectedOption, num)}
                value={formattedOptions.find(option => option.value === selectedIGNs[num]) || null}
                placeholder="Select Hero"
                styles={customStyles}
              />
            </div>
          ))}
        </div>
        <div className="dropdown-group">
          {[10, 9, 8, 7, 6].map(num => (
            <div key={num} className="dropdown-wrapper" style={{backgroundColor:"red", color:"white", fontSize:26}}>
              <label>{`Pick ${num}`}</label>
              <Select
                options={formattedOptions}
                onChange={(selectedOption) => handleDropdownChange(selectedOption, num)}
                value={formattedOptions.find(option => option.value === selectedIGNs[num]) || null}
                placeholder="Select Hero"
                styles={customStyles}
              />
            </div>
          ))}
        </div>
        <div className="dropdown-group" >
          {[1, 2, 3, 4, 5].map(num => (
            <div key={num} className="dropdown-wrapper" style={{backgroundColor:"blue", color:"white", fontSize:26}}>
              <label>{`Ban ${num}`}</label>
              <Select
                options={formattedOptions}
                onChange={(selectedOption) => handleBanDropdownChange(selectedOption, num)}
                value={formattedOptions.find(option => option.value === banIGNs[num]) || null}
                placeholder="Select Hero"
                styles={customStyles}
                
              />
            </div>
          ))}
        </div>
        <div className="dropdown-group">
          {[10, 9, 8, 7, 6].map(num => (
            <div key={num} className="dropdown-wrapper" style={{backgroundColor:"red", color:"white", fontSize:26}}>
              <label>{`Ban ${num}`}</label>
              <Select
                options={formattedOptions}
                onChange={(selectedOption) => handleBanDropdownChange(selectedOption, num)}
                value={formattedOptions.find(option => option.value === banIGNs[num]) || null}
                placeholder="Select Hero"
                styles={customStyles}
              />
            </div>
          ))}
        </div>
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

      <div className="bancontent">
        <div className="columnbanleft">
          {[1, 2, 3, 4, 5].map(num => (
            <div
              key={num}
              className="bancardleft"
              style={{ backgroundImage: `url(${banImages[num] || '/heroes/myr.png'})` }}
            />
          ))}
        </div>

        <div className="columnbanright">
          {[6, 7, 8, 9, 10].map(num => (
            <div
              key={num}
              className="bancardright"
              style={{ backgroundImage: `url(${banImages[num] || '/heroes/myr.png'})` }}
            />
          ))}
        </div>
      </div>

      <div className="content">
  <div className="column">
    {[1, 2, 3, 4, 5].map(num => (
      <div key={num} className="card">
        <video
          src={selectedImages[num] || '/heroes/myr.png'} // Replace with actual video path or use a default video
          loop
          autoPlay
          muted
          className="card-video"
        />
        <h3>{selectedIGNs[num]}</h3>
      </div>
    ))}
  </div>

  <div className="middle-container">
    <div className="middle-square" />
  </div>

  <div className="column">
    {[6, 7, 8, 9, 10].map(num => (
      <div key={num} className="card">
        <video
          src={selectedImages[num] || '/heroes/myr.png'} // Replace with actual video path or use a default video
          loop
          autoPlay
          muted
          className="card-video"
        />
        <h3>{selectedIGNs[num]}</h3>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default App;
