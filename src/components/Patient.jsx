import { FcEmptyTrash } from "react-icons/fc";

const Patient = ({ patient }) => {
  return (
    <div className="flex justify-between m-3 bg-white shadow-md px-5 py-3 rounded-xl">
      <div className="flex-column space-y-4 font-bold text-gray-700 uppercase">
        <p>
          Nombre: {""}
          <span className="font-normal normal-case">{patient.nombre}</span>
        </p>
        <p>
          Nombre propietario: {""}
          <span className="font-normal normal-case">{patient.propietario}</span>
        </p>
        <p>
          email: {""}
          <span className="font-normal normal-case"> {patient.email}</span>
        </p>
        <p>
          fecha de alta: {""}
          <span className="font-normal normal-case"> {patient.fecha}</span>
        </p>
        <p>
          Síntomas: {""}
          <span className="font-normal normal-case"> {patient.sintomas}</span>
        </p>
      </div>
      <FcEmptyTrash size="50px" />
    </div>
  );
};

export default Patient;
