import { twiml } from 'twilio';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';

const wait = (tres: VoiceResponse) => tres.pause({ length: 1 });
const tone = (tres: VoiceResponse) => {
	wait(tres);
	tres.play({ digits: '9', loop: 2 });
};

export const respond = () => {
	const tres = new twiml.VoiceResponse();

	wait(tres);
	tone(tres);
	tone(tres);
	wait(tres);

	return tres;
};
