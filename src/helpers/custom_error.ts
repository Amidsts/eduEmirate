class BaseError extends Error {
    protected success! :boolean
    protected errorName!: string
    public message!: string
    protected statusCode!: number  
    protected data!: object 
}

export class clientError extends BaseError {
    constructor ( errMessage: string, statuscode: number) {
        super()

        this.success = false,
        this.errorName = "client error",
        this.message = errMessage,
        this.statusCode = statuscode,
        this.data = {}
    }
}

export class serverError extends BaseError {
    constructor ( errMessage: string, statuscode: number) {
        super()
        
        this.success = false,
        this.errorName = "server error",
        this.message = errMessage,
        this.statusCode = statuscode,
        this.data = {}
    }
}