class UpdatePasswordUser {
    protected _password: string;
    protected _current_password: string;
    protected _confirm_password: string;

    constructor(body: {
        password: string
        current_password: string
        confirm_password: string
    }) {
        this._password = body.password;
        this._current_password = body.current_password;
        this._confirm_password = body.confirm_password;
    }

    get password(): string {
        return this._password
    }

    get current_password(): string {
        return this._current_password
    }

    get confirm_password(): string {
        return this._confirm_password
    }

}

export default UpdatePasswordUser