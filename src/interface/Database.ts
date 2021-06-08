/*
*  Interface for every Database Model
* */
interface DatabaseObject {
	saveToDB: () => Promise<DBResponse>

	getFromDB: (id: string) => Promise<DBResponse>

	wrap: (obj: Record<string, unknown>) => DatabaseObject
}

class DBResponse {
	private _message?: string;

	private _payload?: DatabaseObject;

	private _success: boolean;

	public constructor(message: string | undefined = undefined,
		payload: DatabaseObject | undefined = undefined,
		success = false) {
		this._message = message;
    	this._success = success;
		this._payload = payload;
	}

	public getMessage(): string | undefined {
		return this._message;
	}

	public setMessage(value: string | undefined): DBResponse {
    	this._message = value;
    	return this;
	}

	public getPayload(): DatabaseObject | undefined {
		return this._payload;
	}

	public setPayload(value: DatabaseObject | undefined): DBResponse {
		this._payload = value;
		return this;
	}

	public getSuccess(): boolean {
    	return this._success;
	}

	public setSuccess(value: boolean): DBResponse {
    	this._success = value;
    	return this;
	}
}

export { DatabaseObject, DBResponse };
