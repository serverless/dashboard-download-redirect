'use strict';

module.exports.redirect = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://s3-us-west-2.amazonaws.com/assets.dashboard/Serverless.app.0.0.3.zip',
    },
    body: '',
  };

  callback(null, response);
};
