TEMPLATE_PROFILE_UPDATE = (email, Name,work) => {
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
  <p>This is a mail from AI Study Mate team to inform you that your current profile has benn updated successfully for ${email}.</p>
  <br />
  <p>These are your new profile details:</p>
  <br />
  <p>UserName: ${Name}</p>
  <p>Profession: ${work}</p>
  <br />
  <p>Regards,</p>
  <p>AI Study Mate</p>
  </body>

  </html>`;
};

module.exports = TEMPLATE_PROFILE_UPDATE;