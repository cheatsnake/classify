[![Website](https://img.shields.io/website?down_color=edad0c&down_message=Classify&up_color=edad0c&up_message=Classify&url=https%3A%2F%2Fclassify-web.herokuapp.com%2F)](https://classify-web.herokuapp.com/)
![GitHub repo size](https://img.shields.io/github/repo-size/cheatsnake/classify?color=blue)
![GitHub](https://img.shields.io/github/license/cheatsnake/classify?color=%235DAF83)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/cheatsnake/classify/issues)

<img src='https://i.ibb.co/MSwyqd8/Screenshot-173.png' title='Classify banner'/>

# :key: Classify

Classify is open source project for enrypting text messages. Encryption is based on a simple and clear "One-time pad" method. The essence of this method is to apply the "exclusive OR" operation for each ASCII code of the message symbol in binary form and the corresponding ASCII code of the secret key.

## :eyeglasses: API overview
Classify API provides unlimited access to encoding and decoding text messages using a given key. You can freely use the endpoints of this API to create your own apps.

## :lock: Encrypting data
This endpoint accepts text message data and a secret key as input. At the output, the user receives a JSON object with an encoded message.
```sh
POST https://classify-web.herokuapp.com/api/encrypt
Content-Type:  application/json; charset=utf-8
{
    "data": "Your message",
    "key": "Your key"
}
```

## :unlock: Decrypting data
This endpoint accepts an encrypted text message and a secret key as input. At the output, the user receives a JSON object with a decrypted message.
```sh
POST https://classify-web.herokuapp.com/api/decrypt
Content-Type:  application/json; charset=utf-8
{
    "data": "Encrypted message",
    "key": "Secret key"
}
```

## :key: Keygen
The reliability of the encrypted message depends on the specified key. Ideally, the key should be randomly generated and have a message length. To do this, you can use our built-in key generator.
```sh
GET https://classify-web.herokuapp.com/api/keygen
```
Key length parameter:
```sh
?length=32
```
Presence of symbols (1 - true, 0 - false):
```sh
?symbols=1
```

## :dart: Examples
JavaScript:
```sh
async function encryptData() {
    try {
        const url = 'https://classify-web.herokuapp.com/api/encrypt';
        const jsonData = JSON.stringify({ 
            data: "Hello world!", key: "secret"
        });
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: jsonData
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
```

## :zap: Launch local server

1. Install packages
```sh
npm install
```
2. Create .env file with secret key
```sh
SECRET_KEY=CreateReliableKeyUsingRandomGenerator
```
> :warning: :warning: :warning: Classify uses double encryption. This means that after encrypting the message with your key, the received encrypted message is encrypted again with the key that is defined in the .env file. Therefore, each created copy of the application will have its own built-in key, and will not support decryption of encrypted messages from another copies of application.

3. Runs the server with Nodemon for development
```sh
npm run dev
```
> The page will reload if you make edits.\
> You will also see any lint errors in the console.\
> Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

4. Launch tests
```sh
npm run test
```

5. Create a production build
```sh
npm run build
```

6. Runs the server of production build
```sh
npm start
```
> Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
