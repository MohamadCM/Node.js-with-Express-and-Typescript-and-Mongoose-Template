import winston, {format} from "winston";

const errorLogger = winston.createLogger({
	format: format.combine(
		format.label({label: "[my-label]"}),
		format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss"
		}),
		format.printf((error) => `${error.level}, Time: ${error.timestamp} `
            + `{\r\n       Location: ${error.location} `
            + `\r\n       Message: ${error.message}\n}`)
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({filename: "./logs/errors.log"})
	]
});

const infoLogger = winston.createLogger({
	format: format.combine(
		format.label({label: "[my-label]"}),
		format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss"
		}),
		format.printf((info) => `${info.level}, Time: ${info.timestamp} `
            + `{\r\n       Message: ${info.message}\n}`)
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({filename: "./logs/info.log"})
	]
});

function logError(message: string, location: string): void {
	errorLogger.error({message, location});
}

function logInfo(message: string): void {
	infoLogger.info({message});
}

export {logError, logInfo};
