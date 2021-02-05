const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 20) => {
	try {
		let salida = "";
		for (let i = 1; i <= hasta; i++) {
			salida += `${base} X ${i} = ${base * i}
        `;
		}

		if (listar) {
			console.log("============");
			console.log(`Tabla del  ${base}`);
			console.log("============");
			console.log(salida);
		}

		fs.writeFileSync(`./salida/archivo${base}.txt`, salida);

		return `Tabla ${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = { crearArchivo };
