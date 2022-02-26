const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
	return new Promise((resolve) => {
		console.clear();
		console.log("=========================================".green);
		console.log("        Seleccione una opción".green);
		console.log("=========================================\n".green);
		console.log(`${"1.".green} Crear tareas`);
		console.log(`${"2.".green} Listar tareas`);
		console.log(`${"3.".green} Listar tareas completadas`);
		console.log(`${"4.".green} Listar tareas Pendientes`);
		console.log(`${"5.".green} Completar tareas(s)`);
		console.log(`${"6.".green} Borrar tarea`);
		console.log(`${"0.".green} Salir \n`);

		const readLine = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readLine.question("Seleccione una opcion: ", (resp) => {
			readLine.close();
			return resolve(resp);
		});
	});
};

const pausar = () => {
	return new Promise((resolve) => {
		const readLine = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readLine.question(
			`\nPresione ${"ENTER".green} para continuar \n`,
			(resp) => {
				readLine.close();
				resolve();
			}
		);
	});
};
module.exports = { mostrarMenu, pausar };
