import React from 'react';

const InputField = ({ fetchWeather, city, setCity }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
};

export default InputField;