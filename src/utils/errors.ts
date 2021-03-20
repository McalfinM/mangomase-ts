import { Response, Request } from "express";

export function HttpErrorHandler (err:ICustomError,req: Request, res: Response) :any {
    const internalServerErrorCode = 500
    const errorReponse :{
        message:string
        statusCode:number
    } = {
        message: err.message,
        statusCode: err.statusCode ?? internalServerErrorCode
    }

    // Error internal message will not show to the api message
    if(errorReponse.statusCode == internalServerErrorCode ){
        errorReponse.message = "Internal Server Error"
    }

    console.error(err)

    return res.status(errorReponse.statusCode).jsonp(errorReponse)
}

interface ICustomError {
    message:string
    statusCode:number
    getPath():string 
    // used later after implement logger
    next(nextPath:string):CustomError
    prev(prevPath:string):CustomError
}

class CustomError extends Error implements ICustomError {
    protected code:number = 500

    constructor(message:string, protected currentPath:string) {
        super(message);
    }

    get statusCode():number {
        return this.code
    }

    getPath():string {
        return this.currentPath
    }

    next(nextPath:string): CustomError {
        this.currentPath += " => " + nextPath
        return this
    }

    prev(prevPath:string): CustomError {
        prevPath += " => " + this.currentPath
        return this
    }
}

export class ErrorNotFound extends CustomError {
    protected code:number = 404

    constructor(message:string, currentPath:string) {
        super(message, currentPath);
        Object.setPrototypeOf(this, ErrorNotFound.prototype);
    }

}

export class ErrorUnprocessableEntity extends CustomError {
    protected code:number = 422

    constructor(message:string, currentPath:string) {
        super(message, currentPath);
        Object.setPrototypeOf(this, ErrorUnprocessableEntity.prototype);
    }
}

export class ErrorInternalServerError extends CustomError {
    protected code:number = 500

    constructor(message:string, currentPath:string) {
        super(message, currentPath);
        Object.setPrototypeOf(this, ErrorInternalServerError.prototype);
    }

}


export class ErrorBadRequest extends CustomError {
    protected code:number = 400

    constructor(message:string, currentPath:string) {
        super(message, currentPath);
        Object.setPrototypeOf(this, ErrorBadRequest.prototype);
    }
    
}