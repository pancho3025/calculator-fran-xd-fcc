import "./App.sass";
import { useState, useEffect } from "react";
import Display from "./Display";
import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import Botones from "./Botones";

const operadores = ["AC", "/", "*", "+", "-", "="];

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("0");
  const [calculadoraData, setCalcuData] = useState("");

  const handleSubmit = () => {
    const total = eval(calculadoraData)
    setInput(`${total}`)
    setOutput(`${total}`)
    setCalcuData(`${total}`);
  };
  const clear = () => {
    setOutput('')
    setInput('0')
    setCalcuData('')

  };
  const controlarNumeros = (valor) => {
    if (!calculadoraData.length) {
      setInput(`${valor}`);
      setCalcuData(`${valor}`);
    } else {
      if (valor === 0 && (calculadoraData === "0" || input === "0")) {
        setCalcuData(`${calculadoraData}`);
      } else {
        const ultimaLetra = calculadoraData.charAt(calculadoraData.length - 1);
        const ultimaLetraOperador =
          ultimaLetra === "*" || operadores.includes(ultimaLetra);

        setInput(ultimaLetraOperador ? `${valor}` : `${input}${valor}`);
        setCalcuData(`${calculadoraData}${valor}`);
      }
    }
  };
  const decimales = () => {
    const ultimaLetra = calculadoraData.charAt(calculadoraData.length - 1);
    if (!calculadoraData.length) {
      setInput("0.");
      setCalcuData("0.");
    } else {
      if (ultimaLetra === "*" || operadores.includes(ultimaLetra)) {
        setInput("0.");
        setCalcuData(`${calculadoraData} 0.`);
      } else {
        setInput(
          ultimaLetra === "." || input.includes(".") ? `${input}` : `${input}.`
        );
        const formattedValue =
          ultimaLetra === "." || input.includes(".")
            ? `${calculadoraData}`
            : `${calculadoraData}.`;
        setCalcuData(formattedValue);
      }
    }
  };
  const controlarOperadores = (valor) => {
    if (calculadoraData.length) {
      setInput(`${valor}`);
      const antesUltimaLetra = calculadoraData.charAt(calculadoraData.length - 2);

      const antesUltimaLetraOperador = 
        operadores.includes(antesUltimaLetra) || antesUltimaLetra === "*";

      const lastChat = calculadoraData.charAt(calculadoraData.length - 1);

      const ultimoLetraOperator =
        operadores.includes(lastChat) || lastChat === "*";

      const validOp = valor === "x" ? "*" : valor;
      if (
        (ultimoLetraOperator && valor !== "-") ||
        (antesUltimaLetraOperador && ultimoLetraOperator)
      ) {
        if (antesUltimaLetraOperador) {
          const valorActualizado = `${calculadoraData.substring(
            0,
            calculadoraData.length - 2
          )}${valor}`;
          setCalcuData(valorActualizado);
        } else {
          setCalcuData(
            `${calculadoraData.substring(
              0,
              calculadoraData.length - 1
            )}${validOp}`
          );
        }
      } else {
        setCalcuData(`${calculadoraData}${validOp}`);
      }
    }
  };

  const manejarInput = (valor) => {
    const numero = numeros.find((num) => num === valor);
    const operador = operadores.find((op) => op === valor);
    switch (valor) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        clear();
        break;
      case numero:
        controlarNumeros(valor);
        break;
      case ".":
        decimales();
        break;
      case operador:
        controlarOperadores(valor);
        break;
      default:
        break;
    }
  };
  const manejarOutput = () => {
    setOutput(calculadoraData);
  };

  useEffect(() => {
    manejarOutput();
  }, [calculadoraData]);

  return (
    <>
      <div className="calc-container">
        <Display input={input} output={output} />
        <Botones manejarInput={manejarInput} />
      </div>
      <div className="autor">
        <p className="autor-desc">Creado por</p>
        <h3 className="autor-name">francisco</h3>
        <div className="">
          <a
            href="https://github.com/pancho3025"
            target="_blank"
            className="links github"
          >
            <BsGithub className="icons" />
          </a>
          <a
            href="https://codepen.io/pancho3025"
            target="_blank"
            className="links codepen"
          >
            <FaCodepen className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

