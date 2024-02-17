import { twiml } from 'twilio';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';

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
