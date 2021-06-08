import dotenv from "dotenv";

dotenv.config();

interface PARAMETERS {
	UNKNOWN: string,
	SECRET_KEY: string,
	HASH_SALT_ROUNDS: number
}

const parameters: PARAMETERS = {
	UNKNOWN: "NOT_SET",
	SECRET_KEY: process.env.SECRET_KEY || "KEY",
	HASH_SALT_ROUNDS: Number.parseInt(process.env.HASH_SALT_ROUNDS || "1")
};

export default parameters;
