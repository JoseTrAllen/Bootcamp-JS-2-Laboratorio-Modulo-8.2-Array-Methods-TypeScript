
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
  let listaPacientesPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      listaPacientesPediatria = [...listaPacientesPediatria, pacientes[i]];
    };
  };
  return listaPacientesPediatria;
};

const pacientesPediatra = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatra);

//<<<<<<<<<<<<<<< <Apartado 1-b >>>>>>>>>>>>>>>>>>>>>

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesMenoresDeDiezAños: Pacientes[] = [];
  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].edad < 10) {
      pacientesMenoresDeDiezAños = [...pacientesMenoresDeDiezAños, pacientes[i]];
    };
    i++;
  };
  return pacientesMenoresDeDiezAños;
};

const edadMenordeDiez = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(edadMenordeDiez);

//<<<<<<<<<<<<<<<< Apartado 2 >>>>>>>>>>>>>>>>>>>>

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;

  for (let i = 0; i< pacientes.length; i++) {
    if (pacientes[i].temperatura > 100 && pacientes[i].frecuenciaCardiaca > 100) {
      activarProctolo = true;
    };
  };
  return activarProctolo;
};

const protocoloEmergencia = activarProtocoloUrgencia(pacientes);
console.log("¿Hace falta activar el protocolo de urgencia?:", protocoloEmergencia);

//<<<<<<<<<<<<<<<<<<< Apartado 3 >>>>>>>>>>>>>>>>>>>>

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Médico de familia";
    };
  };
  return pacientes;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes)
console.log(pacientesReasignados);

//<<<<<<<<<<<<<<<<<< Apartado 4 >>>>>>>>>>>>>>>>>>

let hayPacientes = true;

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientes = false;
    };
  };
  return hayPacientes;
};

console.log("¿Podemos enviar a casa al pediatra?", hayPacientes);//No hay pacientes porque en el apratado anterior lo hice mutable

//<<<<<<<<<<<<<<<<<<< Apartado 5 >>>>>>>>>>>>>>>>>>>

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
};

let totalPacientes: NumeroPacientesPorEspecialidad = 
{
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0,
};

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
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
  };
  return totalPacientes;
};

const numeroTotalPacientes = cuentaPacientesPorEspecialidad(pacientes);
console.log(numeroTotalPacientes);