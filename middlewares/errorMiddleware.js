class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || 'Internet Server Error';
  err.statusCode = err.statusCode || 400;

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValues)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === 'JsonWebTokenError') {
    const message = 'Json Web Token is invalid. Try again later!';
    err = new ErrorHandler(message, 502);
  }
  if (err.name === 'JsonWebTokenExpired') {
    const message = 'Json Web Token is expired. Try again later!';
    err = new ErrorHandler(message, 502);
  }
  if (err.name === 'CastError') {
    const message = `Invalid ${err.path} `;
    err = new ErrorHandler(message, 502);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(' ')
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
