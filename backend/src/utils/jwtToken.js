
export const generateToken = (user, statusCode, res, message) => {
  // console.log(res); // Add this line to check the res object
  const token = user.generateJsonWebToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
