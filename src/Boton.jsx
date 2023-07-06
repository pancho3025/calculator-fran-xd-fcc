const Boton = ({ keyData: { id, value }, manejarInput }) => (
  <button
    id={id}
    onClick={() => {
      manejarInput(value);
    }}
  >
    {value}
  </button>
);

export default Boton;
