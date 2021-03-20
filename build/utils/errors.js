"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBadRequest = exports.ErrorInternalServerError = exports.ErrorUnprocessableEntity = exports.ErrorNotFound = exports.HttpErrorHandler = void 0;
function HttpErrorHandler(err, req, res) {
    var _a;
    const internalServerErrorCode = 500;
    const errorReponse = {
        message: err.message,
        statusCode: (_a = err.statusCode) !== null && _a !== void 0 ? _a : internalServerErrorCode
    };
    // Error internal message will not show to the api message
    if (errorReponse.statusCode == internalServerErrorCode) {
        errorReponse.message = "Internal Server Error";
    }
    console.error(err);
    return res.status(errorReponse.statusCode).jsonp(errorReponse);
}
exports.HttpErrorHandler = HttpErrorHandler;
class CustomError extends Error {
    constructor(message, currentPath) {
        super(message);
        this.currentPath = currentPath;
        this.code = 500;
    }
    get statusCode() {
        return this.code;
    }
    getPath() {
        return this.currentPath;
    }
    next(nextPath) {
        this.currentPath += " => " + nextPath;
        return this;
    }
    prev(prevPath) {
        prevPath += " => " + this.currentPath;
        return this;
    }
}
class ErrorNotFound extends CustomError {
    constructor(message, currentPath) {
        super(message, currentPath);
        this.code = 404;
        Object.setPrototypeOf(this, ErrorNotFound.prototype);
    }
}
exports.ErrorNotFound = ErrorNotFound;
class ErrorUnprocessableEntity extends CustomError {
    constructor(message, currentPath) {
        super(message, currentPath);
        this.code = 422;
        Object.setPrototypeOf(this, ErrorUnprocessableEntity.prototype);
    }
}
exports.ErrorUnprocessableEntity = ErrorUnprocessableEntity;
class ErrorInternalServerError extends CustomError {
    constructor(message, currentPath) {
        super(message, currentPath);
        this.code = 500;
        Object.setPrototypeOf(this, ErrorInternalServerError.prototype);
    }
}
exports.ErrorInternalServerError = ErrorInternalServerError;
class ErrorBadRequest extends CustomError {
    constructor(message, currentPath) {
        super(message, currentPath);
        this.code = 400;
        Object.setPrototypeOf(this, ErrorBadRequest.prototype);
    }
}
exports.ErrorBadRequest = ErrorBadRequest;
