////
import * as dotenv from 'dotenv';
dotenv.config({ path: process.cwd() + '/.env' });
////

import express from 'express';
import { TLog } from '@tycrek/log';
import { respond, alert } from './twilio';

const PORT = 38351;
const log = new TLog();
const app = express();

// Configure Express
app.enable('case sensitive routing');
app.disable('x-powered-by');
app.set('trust proxy', true);

// Indexer route
app.get('/', (req, res) => res.sendStatus(200));

// Answer call
app.post('/voice', (req, res) => {
	log.info('Call received');
	res.type('text/xml').send(respond().toString());

	// Send SMS alert
	alert()
		.then((msg) => log.info('Alert sent', msg.sid))
		.catch((err) => log.error(err));
});

// Start
log.info('~ lucio ~').blank().callback(() =>
	app.listen(PORT, () => log.success(`Server running on port ${PORT}`)));
