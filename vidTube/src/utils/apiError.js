class apiError extends Error {
    constructor(
        statusCode,
        message = "Something Wrong With Api",
        error = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null
        this.error = error;
        this.stack = stack
        this.success = false
        if (stack) { this.stack = stack } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { apiError }