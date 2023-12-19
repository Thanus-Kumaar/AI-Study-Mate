TEMPLATE_RESET_SUCCESS = (email, Name) => {
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
  </style>
  </head>

  <body>
  <p>Dear ${Name},</p>
  <br />
  <p>This is a mail from AI Study Mate team to confirm your password reset for ${email}.</p>
  <br />
  <p>Your password was reset successfully!</p>
  <p>Regards,</p>
  <p>AI Study Mate</p>
  </body>

  </html>`;
};

module.exports = TEMPLATE_RESET_SUCCESS;