import * as process from "process";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBUser: string = process.env.DB_USERNAME || "";
const DBPass: string = process.env.DB_PASSWORD || "";
const DBAddress: string = process.env.DB_ADDRESS || "";

/**
 * This is singleton database class
 * On first instantiation, it connects to mongoDB using mongoose
 */
class Database {
	private readonly _DBUser: string = DBUser;

	private readonly _DBPassword: string = DBPass;

	private readonly _DBAddress: string = DBAddress;

	private readonly _mongoURI: string = `mongodb://${this._DBUser}:${this._DBPassword
	}@${this._DBAddress}`;

	private static readonly _instance: Database;

	public static getInstance(): Database {
		if (Database._instance) {
			return this._instance;
    	}
		return new Database();
	}

	private constructor() {
		// Connecting to Database
    	mongoose
    		.connect(this._mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    		.then(() => console.log("Mongo connected"))
    		.catch((err) => console.log("Error in mongo connection", err));
    	//
	}

	public get DBAddress(): string {
		return this._DBAddress;
	}

	public get DBUser(): string {
		return this._DBUser;
	}
}

export { Database };
