import express from 'express';
import { twiml } from 'twilio';
import { TLog } from '@tycrek/log';

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

	const tres = new twiml.VoiceResponse();
	tres.say('Welcome');
	tres.pause({ length: 2 });
	tres.play({ digits: '99' });
	tres.pause({ length: 2 });

	res.type('text/xml').send(tres.toString());
});

// Start
log.info('~ lucio ~').blank().callback(() => app.listen(PORT, () => log.success(`Server running on port ${PORT}`)));
