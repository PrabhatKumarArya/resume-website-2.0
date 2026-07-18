const errorHandler = (err, req, res, next) => {
  console.error("===== ERROR =====");
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
  });
};

export default errorHandler;