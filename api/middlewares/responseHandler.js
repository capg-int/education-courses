const responseHandler = (req, res) => {
  const {
    status: statusCode = 200,
    message: errorMessage = "Something went wrong!",
    data = [],
  } = res.locals;

  const response = {
    status: statusCode == 200 ? "SUCCESS" : "FAIL",
    data,
  };

  if (statusCode != 200) {
    delete response.data;
    response.message = errorMessage;
  }

  res.status(statusCode).json(response).end();
};

module.exports = responseHandler;
