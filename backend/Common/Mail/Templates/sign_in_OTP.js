TEMPLATE_SIGNIN_OTP = (email, Name, otp) => {
  return `<!DOCTYPE html>
  <html lang="en">

  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for joining AI Study Mate</title>
  <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .OTP{
        display: flex;
        flex-direction: row;
        column-gap: 5px;
      }
      .OTP-elem{
        width: 50px;
        height: 50px;
        font-size: 20px;
        text-align: centre;
      }
  </style>
  </head>

  <body>
  <p>Dear ${Name},</p>
  <br />
  <p>This is a mail from AI Study Mate team to sign in for ${email}. Use the below OTP to complete verification and sign in.</p>
  <br />
  <div class="OTP">
      <div class="OTP-elem">${otp[0]}</div>
      <div class="OTP-elem">${otp[1]}</div>
      <div class="OTP-elem">${otp[2]}</div>
      <div class="OTP-elem">${otp[3]}</div>
  </div>
  <br />
  <p>Regards,</p>
  <p>AI Study Mate</p>
  </body>

  </html>`;
};

module.exports = TEMPLATE_SIGNIN_OTP;