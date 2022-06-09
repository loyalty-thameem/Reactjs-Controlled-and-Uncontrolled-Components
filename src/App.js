import React, { useRef, useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };
  const handleSubmitButton = () => {
    alert(inputValue);
  };
  return (
    <div className="App">
      <input ref={inputRef} onChange={handleInputChange} />
      <input type="submit" value="submit" onClick={handleSubmitButton} />
    </div>
  );
}
