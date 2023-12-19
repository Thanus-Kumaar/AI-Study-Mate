TEMPLATE_WELCOME = (email, Name, password) => {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for joining AI Study Mate</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
    </head>

    <body>
    <p>Dear ${Name},</p>
    <br />
    <p>Greetings from AI Study Mate team. Welcome Aboard !</p>
    <p>Thank you for registering to the application. Here is your credentials. Head to the home page and start exploring.</p>
    <br />
    <p>EmailID: ${email}</p>
    <p>Password: ${password}</p>
    <br />
    <p>Regards,</p>
    <p>AI Study Mate</p>
    </body>

    </html>`;
};

module.exports = TEMPLATE_WELCOME;