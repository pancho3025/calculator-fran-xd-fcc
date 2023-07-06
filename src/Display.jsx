function Display({ input, output }) {
  return (
    <>
      <div className="resultado">{output}</div>
      <div className="salida" id="display">
        {input}
      </div>
    </>
  );
}

export default Display;
