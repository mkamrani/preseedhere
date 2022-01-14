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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
    }
  }
  try {
    await axios.post(url, data, config);
  } catch (error) {
    console.log(`failed to send the email`);
  }
  console.log(`email sent successfully`);

  var response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": "New subscription from: " + event.body.email
  }
  return response
}
