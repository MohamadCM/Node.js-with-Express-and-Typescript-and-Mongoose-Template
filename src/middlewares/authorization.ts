import { Request, Response, NextFunction } from "express";
import {User} from "../interface/User";
import Messages from "../config/Messages";

function authorize(user: User) {
	return async (req: Request, res: Response, next: NextFunction):
	Promise<void> => {
		const authHeader = req.headers.authorization || <string>req.query.token;
		let access = false;
		if (authHeader) {
			if(authHeader.split(" ")[0] !== "Bearer") {
				const token = authHeader.split(" ")[1]; // Received token should be like: Bearer <jwt-token>
				if (user.verify(token)) {
					access = true;
					next();
				}
			}
		}
		if (!access) {
			res.status(401).json(Messages.unauthorizedAccess);
		}
		return;
	};
}
export default authorize;
