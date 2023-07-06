import "./App.sass";
import Boton from "./Boton";

const BUTTONS = [
    {
      id: "clear",
      value: "AC"
    },
    {
      id: "divide",
      value: "/"
    },
    {
      id: "multiply",
      value: "*"
    },
    {
      id: "seven",
      value: 7
    },
    {
      id: "eight",
      value: 8
    },
    {
      id: "nine",
      value: 9
    },
    {
      id: "subtract",
      value: "-"
    },
    {
      id: "four",
      value: 4
    },
    {
      id: "five",
      value: 5
    },
    {
      id: "six",
      value: 6
    },
    {
      id: "add",
      value: "+"
    },
    {
      id: "one",
      value: 1
    },
    {
      id: "two",
      value: 2
    },
    {
      id: "three",
      value: 3
    },
    {
      id: "equals",
      value: "="
    },
    {
      id: "zero",
      value: 0
    },
    {
      id: "decimal",
      value: "."
    }
  ];

const Botones=({ manejarInput })=> (
    <div className="symbols">
        {BUTTONS.map((key)=>(
            <Boton className={key.value == "-" ||key.value == "*" ||key.value == "/" ||key.value == "+"? "operaciones": ""} key={key.id} keyData={key} manejarInput={manejarInput}/>
        ))}
    </div>


)
  
     

export default Botones;
