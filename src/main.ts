
type Especialidad = "Médico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Médico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Médico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Médico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//<<<<<<<<<<<<<<<< Apartado 1-a >>>>>>>>>>>>>>>>>>

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((pacientes: Pacientes) : boolean => pacientes.especialidad === "Pediatra");
};

const pacientesAsignadosPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesAsignadosPediatria);

//<<<<<<<<<<<<<<< <Apartado 1-b >>>>>>>>>>>>>>>>>>>>>

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((pacientes: Pacientes) : boolean => pacientes.edad < 10 && pacientes.especialidad === "Pediatra");
};

const pacientesMenoresdeDiezYPediatria: Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesMenoresdeDiezYPediatria);

//<<<<<<<<<<<<<<<< Apartado 2 >>>>>>>>>>>>>>>>>>>>

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((pacientes: Pacientes) : boolean => pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39);
};

const protocoloActivo = activarProtocoloUrgencia(pacientes);
console.log("¿Hay que activar el protocolo de emergencia?", protocoloActivo);

//<<<<<<<<<<<<<<<<<<< Apartado 3 >>>>>>>>>>>>>>>>>>>>

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.map((pacientes: Pacientes) => {
    if (pacientes.especialidad === "Pediatra") {
      return { 
        ...pacientes,
        especialidad: "Médico de familia",};
    };
    return pacientes;
  });
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes)
console.log(pacientesReasignados);

//<<<<<<<<<<<<<<<<<< Apartado 4 >>>>>>>>>>>>>>>>>>

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((pacientes: Pacientes) :  boolean=> pacientes.especialidad === "Pediatra");
};

const pacientesAsignados = HayPacientesDePediatria(pacientes);
console.log("¿Tiene pacientes asignados el pediatra?", pacientesAsignados);

//<<<<<<<<<<<<<<<<<<< Apartado 5 >>>>>>>>>>>>>>>>>>>

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
};

let totalPacientes: NumeroPacientesPorEspecialidad = {
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0,
};

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    pacientes.forEach((pacientes: Pacientes) => {
    switch (pacientes.especialidad) {
      case "Médico de familia":
        totalPacientes.medicoDeFamilia++;
      break;
      case "Pediatra":
        totalPacientes.pediatria++;
      break;
      case "Cardiólogo":
        totalPacientes.cardiologia++;
      break;
    };
  });
  return totalPacientes;
};

const total = cuentaPacientesPorEspecialidad(pacientes);
console.log(total);


