import httpStatus from 'http-status';

export default  (err, req, res, next) => {
  console.log('error in error handler mdw -----', err);
  return res.status(err.status).json({
    data: err.data || [],
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: stack ? err.stack : '',
    status: 'error'
  });
};
