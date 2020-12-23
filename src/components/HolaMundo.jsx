import React from 'react';

const HolaMundo = () => {
  const Hello = 'Hola Mundo!';
  const isTrue = false;
  return (
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEM4MxLvo0PJyFSLa17psREjylXve9PeP5w&usqp=CAU"
        alt="Hola Mundo, desde React!"
      />
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Es falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
};

export default HolaMundo;
