class RegisterUserRequest {
    protected _username: string;
    protected _name: string
    protected _email: string
    protected _password: string
    constructor(body: {
        username: string
        name: string
        email: string
        password: string
    }) {
        this._username = body.username
        this._name = body.name
        this._email = body.email
        this._password = body.password
    }

    get username(): string {
        return this._username
    }
    get name(): string {
        return this._name
    }
    get email(): string {
        return this._email
    }
    get password(): string {
        return this._password
    }

}

export default RegisterUserRequest