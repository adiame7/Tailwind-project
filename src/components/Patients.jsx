import Patient from "./Patient.jsx";

const Patients = ({ patients }) => {
  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      <h3 className="font-black text-3xl text-center mt-5 mx-3">
        {" "}
        Listado Pacientes
      </h3>
      <p className="text-xl mt-5 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold text-xl">
          Pacientes y citas
        </span>
      </p>
      {patients.map((patient) => {
        return <Patient patient={patient} key={patient.id} />;
      })}
    </div>
  );
};

export default Patients;
