class ValueError extends Error {
    constructor(message) {
        super(message)
    }
}

class FormatError extends Error {
    constructor(message) {
        super(message)
    }
}

class RequirementError extends Error {
    constructor(message) {
        super(message)
    }
}

class ConnectionError extends Error {
    constructor(message) {
        super(message)
    }
}

class LogicError extends Error {
    constructor(message) {
        super(message)
    }
}

class HttpError extends Error {
    constructor(message) {
        super(message)
    }
}

export {
    ValueError,
    FormatError,
    RequirementError,
    ConnectionError,
    LogicError,
    HttpError
}