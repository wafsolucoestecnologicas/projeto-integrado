import fs from 'fs';
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		const id = String(request.query.id);
		const CNPJ = request.payload.company.CNPJ;
		
		switch (request.baseUrl) {
			case '/properties':
				if (!fs.existsSync(path.resolve('public', 'uploads', 'properties', CNPJ))) {
					fs.mkdirSync(path.resolve('public', 'uploads', 'properties', CNPJ));
				}
		
				if (!fs.existsSync(path.resolve('public', 'uploads', 'properties', CNPJ, id))) {
					fs.mkdirSync(path.resolve('public', 'uploads', 'properties', CNPJ, id));
				}
		
				callback(null, path.resolve('public', 'uploads', 'properties', CNPJ, id));
				break;

			case '/businesses':
				if (!fs.existsSync(path.resolve('public', 'uploads', 'businesses', CNPJ))) {
					fs.mkdirSync(path.resolve('public', 'uploads', 'businesses', CNPJ));
				}
		
				if (!fs.existsSync(path.resolve('public', 'uploads', 'businesses', CNPJ, id))) {
					fs.mkdirSync(path.resolve('public', 'uploads', 'businesses', CNPJ, id));
				}
		
				callback(null, path.resolve('public', 'uploads', 'businesses', CNPJ, id));
				break;
		}
	},
	filename: (request, file, callback) => {
		callback(null, file.originalname);
	}
});

const uploads = multer({ storage: storage });

export default uploads;
