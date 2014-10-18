# fbme

Simple tool written in Node to get the `on.fb.me` link for any Facebook post or group. Useful for administrating Facebook groups.

Uses the [bit.ly](http://bit.ly) API, so you'll need an API key. Get one at [bitly.com/a/your_api_key](https://bitly.com/a/your_api_key).

```bash
$ fbme https://www.facebook.com/pages/Nodejs/132640106759624
http://on.fb.me/1wUdJXQ
```

## Usage

You can omit the bit.ly API token if you create an environment variable called `BITLY_TOKEN` containing the token.

`fbme <url> <bitly-api-token>`

## Installation

`npm install fbme`

Optional: If you don't want to enter your bit.ly API key every time, add the environment variable called `BITLY_TOKEN` with you API key. Don't know how to do that? Do this, replacing `YOUR_TOKEN_HERE` with your API key.

```bash
echo 'export BITLY_TOKEN="$YOUR_KEY_HERE"' >> ~/.bash_profile
```
