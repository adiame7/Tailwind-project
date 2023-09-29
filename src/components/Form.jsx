import { useState, useEffect } from "react";
import Error from "./Error.jsx";

const Form = ({ patients, setPatients }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    setPatients([...patients, objetoPaciente]);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center mt-5 mx-3">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 mx-5 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex-column space-y-5 font-bold uppercase text-lg bg-auto rounded-sm shadow-lg mx-8 h-100 py-5"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div>
          <label className="mt-5 mx-3">Nombre Mascota</label>
          <input
            className="shadow font-normal appearance-none border rounded w-11/12 py-2 mt-5 mx-3"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-5 mx-5">Nombre propietario</label>
          <input
            className="font-normal shadow appearance-none border rounded w-11/12 py-2 mt-5 mx-3"
            type="text"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-5 mx-5">Email</label>
          <input
            className="font-normal shadow appearance-none border rounded w-11/12 py-2 mt-5 mx-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-5 mx-5">alta</label>
          <input
            className="font-normal shadow appearance-none border rounded w-11/12 py-2 mt-5 mx-3"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-5 mx-5">Sintomas</label>
          <input
            className="font-normal shadow appearance-none border rounded w-11/12 mt-5 mx-3 h-20 py-0 px-4"
            type="text"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-5 mx-5">
          <button
            className="bg-indigo-500 p-3 border rounded text-white uppercase font-bold hover:bg-indigo-700 mt-5  cursor-pointer w-4/5"
            type="submit"
          >
            Agregar Paciente
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
