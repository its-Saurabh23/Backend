export const successResponse = (res, data, statusCode = 200) => {
    res.status(statusCode).json({
        data,
        status: "success",
        statusCode,
        timestamp: new Date().toISOString(),
        results: Array.isArray(data) ? data.length : undefined,
    });
};

export const errorResponse = (res, message, statusCode = 500) => {
    res.status(statusCode).json({
        status: "error",
        statusCode,
        timestamp: new Date().toISOString(),
        message,
    });
};