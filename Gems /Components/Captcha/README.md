```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAPTCHA Form with Event Listeners</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        #captcha {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            background-color: #e0e0e0;
            padding: 10px;
            border-radius: 5px;
            letter-spacing: 5px;
            margin-bottom: 10px;
            cursor: pointer;
            user-select: none;
            transition: background-color 0.3s;
        }
        #captcha:hover {
            background-color: #d0d0d0;
        }
        input, button {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .info {
            font-size: 12px;
            color: #666;
            text-align: center;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="captcha"></div>
        <div class="info">Click on the CAPTCHA to generate a new one</div>
        <input type="text" id="captchaInput" placeholder="Enter CAPTCHA">
        <button id="submitButton">Submit</button>
    </div>

    <script>
        let captchaText = '';

        function generateCaptcha() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            captchaText = '';
            for (let i = 0; i < 6; i++) {
                captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById('captcha').innerText = captchaText;
        }

        function validateCaptcha() {
            const input = document.getElementById('captchaInput').value;
            if (input === captchaText) {
                alert('CAPTCHA validated successfully!');
                generateCaptcha();
            } else {
                alert('CAPTCHA validation failed. Please try again.');
                generateCaptcha();
            }
            document.getElementById('captchaInput').value = '';
        }

        // Generate initial CAPTCHA
        generateCaptcha();

        // Add event listeners
        document.getElementById('captcha').addEventListener('click', generateCaptcha);
        document.getElementById('submitButton').addEventListener('click', validateCaptcha);
    </script>
</body>
</html>

```


1. Added event listeners at the end of the script:
   ```javascript
   document.getElementById('captcha').addEventListener('click', generateCaptcha);
   document.getElementById('submitButton').addEventListener('click', validateCaptcha);
   ```
This approach is more flexible and adheres to the principle of separation of concerns, making the code easier to maintain and extend in the future.
