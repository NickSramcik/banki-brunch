import { NextFunction, Response, Request } from "express"
import { ZodError, ZodSchema } from "zod"

const validate = (schema: ZodSchema<any, any, any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          status: "failed",
          message: error.issues[0].message
        })
      }
    }
  }
}

export default validate
