import twilio, { twiml } from 'twilio';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';

const smsClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const wait = (r: VoiceResponse) => r.pause({ length: 1 });
const tone = (r: VoiceResponse) => {
	wait(r);
	r.play({ digits: '9', loop: 2 });
};

export const respond = () => {
	const r = new twiml.VoiceResponse();

	wait(r);
	tone(r);
	tone(r);
	wait(r);

	return r;
};

export const alert = () =>
	smsClient.messages.create({
		from: process.env.SMS_FROM,
		to: process.env.SMS_TO,
		body: 'Door open'
	});
