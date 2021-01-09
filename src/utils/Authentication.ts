import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class Authentication {

    public static hash = (password:string) : Promise<string> => {
        return bcrypt.hash(password,12)
    }

    public static passwordCompare = async (text: string, encrypt: string): Promise<boolean> => {
        let result = await bcrypt.compare(text, encrypt)
        return result
    }

    public static generateToken = async (username: string, email: string, uuid: string): Promise<string> => {
        const secretKey: string = process.env.JWT_SECRET || 'secret'
        const token: string = jwt.sign({ username, email, uuid }, secretKey)

        return token
    }
}

export default Authentication