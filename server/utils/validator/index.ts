import { ValidationChain, validationResult } from 'express-validator'
import { NextApiRequest, NextApiResponse } from 'next'
import nc, { Middleware, RequestHandler } from 'next-connect'

const initValidation = (validations: ValidationChain[]): RequestHandler<NextApiRequest, NextApiResponse> => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)))
        const errors = validationResult(req)
        if (errors.isEmpty()) return next()
        const errorsMessage: Record<string, string> = {}
        errors.array().forEach(({ param, msg }) => (errorsMessage[param] = msg))
        res.status(400).json({
            success: false,
            data: null,
            message: errorsMessage,
        })
    }
}

const validator = {
    post(url: string | RegExp, middleware: Middleware<NextApiRequest, NextApiResponse>) {
        return nc().post(url, middleware)
    },
}

export { initValidation, validator }
