declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			PORT?: number;
			SMS_FROM: string;
			SMS_TO: string;
			TWILIO_ACCOUNT_SID: string;
			TWILIO_AUTH_TOKEN: string;
		}
	}
}

export { }
