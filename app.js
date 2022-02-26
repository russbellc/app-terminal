require("colors");

const { mostrarMenu, pausar } = require("./helpers/mensajes");

const main = async () => {
	let resp;
	do {
		resp = await mostrarMenu();
		console.log({ resp });
		if (resp !== "0") await pausar();
	} while (resp !== "0");
};

main();
