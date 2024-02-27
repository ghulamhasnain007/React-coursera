import React, { useState } from 'react';

function ModeToggler() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  const darkModeText = <h1>Dark Mode is On</h1>;
  const lightModeText = <h1>Light Mode is On</h1>;

  const handleClick = () => {
    setDarkModeOn(!darkModeOn);
  };

  return (
    <div>
      {darkModeOn ? darkModeText : lightModeText}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ModeToggler;


// export default ModeToggler