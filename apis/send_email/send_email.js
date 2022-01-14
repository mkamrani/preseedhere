const axios = require('axios')

exports.handler = async function (event, context) {
  console.log(`email: ${event.body.email}`);

  const data = {
    personalizations:
      [
        {
          to:
            [{ email: process.env.RECEIVER }]
        }]
    , from: {
      email: process.env.SENDER
    },
    subject: "preseedhere new sub",
    content: [{ type: "text/plain", value: event.body.email }
    ]
  }

  const url = "https://api.sendgrid.com/v3/mail/send";
  config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
    }
  }
  await axios.post(url, data, config);
  console.log(`sent email`);

  var response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": "New subscription from: " + event.body.email
  }
  return response
}
