const axios = require('axios')
const axios = require('axios')

exports.handler = async function (event, context) {
  console.log(`email: ${event.body.email}`);

  const data = {
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
  };

  const url = "https://api.sendgrid.com/v3/mail/send";
  config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
    }
  }
  await axios.post(url, data, config);
  console.log(`sent email`);

  // const options = {
  //   hostname: "https://api.sendgrid.com",
  //   port: 443,
  //   path: '/v3/mail/send',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.TOKEN}`,
  //     'Content-Length': data.length
  //   }
  // }

  // console.log(`sending`);
  // await httpRequest(options);
  // console.log(`sent`);

  // const req = https.request(options, (res) => {
  //   let data = '';

  //   res.on('data', (chunk) => {
  //     data += chunk;
  //   });

  //   res.on('end', () => {
  //     console.log(JSON.parse(data));
  //   });

  // }).on("error", (err) => {
  //   console.log("Error: ", err.message);
  // });

  // req.write(data);
  // req.end();
  // console.log(`sent the email`);

  var response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": "New subscription from: " + event.body.email
  }
  return response
}

// function httpRequest(options) {
//   return new Promise((resolve, reject) => {
//     const req = http.request(options, (res) => {
//       if (res.statusCode < 200 || res.statusCode >= 300) {
//         return reject(new Error('statusCode=' + res.statusCode));
//       }
//       var body = [];
//       res.on('data', function (chunk) {
//         body.push(chunk);
//       });
//       res.on('end', function () {
//         try {
//           body = JSON.parse(Buffer.concat(body).toString());
//         } catch (e) {
//           reject(e);
//         }
//         resolve(body);
//       });
//     });
//     req.on('error', (e) => {
//       reject(e.message);
//     });
//     // send the request
//     req.end();
//   });
// }