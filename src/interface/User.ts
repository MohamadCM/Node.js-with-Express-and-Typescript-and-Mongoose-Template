// General User Interface
interface User {
	_username: string
	_password: string
	verify: (token: string) => boolean
	getToken: () => string
}
enum UserRoles {
	CUSTOMER = 0
}
export { User, UserRoles };
