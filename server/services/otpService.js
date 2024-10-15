const axios = require('axios');

// Replace these with your SMSCountry credentials
const smsCountryUserId = 'Mkau2109';
const smsCountryPassword = 'Mkau#2109z';
// onst smsCountrySenderId = 'YOUR_SMSCOUNTRY_SENDER_ID'; // Optional if you have a registered Sender ID

// Function to send OTP using SMSCountry
const sendOtp = (phone, otp) => {
  const url = `https://www.smscountry.com/SMSCwebservice_bulk.aspx`;
  const message = `Your OTP is: ${otp}`; // OTP message content

  return axios
    .get(url, {
      params: {
        User: smsCountryUserId,
        passwd: smsCountryPassword,
        mobilenumber: phone,
        message: message,
        sid: smsCountrySenderId,
        mtype: 'N', // Set 'N' for normal SMS
        DR: 'Y', // Set 'Y' to get a delivery report
      },
    })
    .then(response => {
      console.log(`OTP ${otp} sent to ${phone}`);
      return response.data; // Success
    })
    .catch(err => {
      console.error('Error sending OTP:', err.message);
      throw err;
    });
};

module.exports = { sendOtp };
