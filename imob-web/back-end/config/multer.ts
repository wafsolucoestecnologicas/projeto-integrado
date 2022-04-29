import fs from 'fs';
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		const id = String(request.query.id);
		const CNPJ = request.payload.company.CNPJ;

		if (!fs.existsSync(path.resolve('public', 'uploads', 'businesses', CNPJ))) {
			fs.mkdirSync(path.resolve('public', 'uploads', 'businesses', CNPJ));
		}

		if (!fs.existsSync(path.resolve('public', 'uploads', 'businesses', CNPJ, id))) {
			fs.mkdirSync(path.resolve('public', 'uploads', 'businesses', CNPJ, id));
		}

		callback(null, path.resolve('public', 'uploads', 'businesses', CNPJ, id));
	},
	filename: (request, file, callback) => {
		callback(null, file.originalname);
	}
});

const uploads = multer({ storage: storage });

export default uploads;
