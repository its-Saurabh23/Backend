import rateLimit from "express-rate-limit";

export const userRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        message: "Too many requests, please try again later"
    }
})

export const getAllUsersRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 20, // 20 POSTs per 10 minutes
    message: {
        message: "Too many requests, please try again later"
    }
})