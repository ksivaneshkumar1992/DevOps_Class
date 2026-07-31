const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || "dev1";
dotenv.config({ path: `.env.${env}` });

function log(message) {
	        const time = new Date().toISOString();
	        const logMessage = `[${time}] [${env.toUpperCase()}] ${message}`;
	        console.log(logMessage);
}

const app = express();
const PORT = process.env.PORT;
const APP = process.env.APP;

app.get ('/health', (req,res) => {
	        log('Health Check Sucess');
	        res.status(200).json({
			                status: "UP"
			        });
});

app.get('/', (req,res) => {
	        res.send('Hello this is webapp using express framework ' + APP);
});
app.listen(PORT, () => {
	        log('this  is using express web framework ' + PORT);
});
