const https = require('https')

exports.handler = async function (event, context) {
  console.log(`email: ${event.body.email}`);

  const data = JSON.stringify({
    personalizations: [
      {
        to: process.env.RECEIVER,
        subject: 'preseedhere new sub'
      }
    ],
    from: {
      email: process.env.SENDER
    },
    content: event.body.email
  })

  const options = {
    hostname: "https://api.sendgrid.com",
    port: 443,
    path: '/v3/mail/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
      'Content-Length': data.length
    }
  }

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: ", err.message);
  });

  req.write(data);
  req.end();
  console.log(`sent the email`);

  var response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "isBase64Encoded": false,
    "body": "New subscription from: " + event.body.email
  }
  return response
}