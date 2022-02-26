require("colors");

const mostrarMenu = () => {
	console.clear();
	console.log("=========================================".green);
	console.log("        Seleccione una opción".green);
	console.log("=========================================\n".green);
	console.log(`1. Crear tareas`);
	console.log(`2. Listar tareas`);
	console.log(`2. Listar tareas completadas`);
	console.log(`2. Listar tareas Pendientes`);
	console.log(`2. Completar tareas(s)`);
};

module.exports = { mostrarMenu };
