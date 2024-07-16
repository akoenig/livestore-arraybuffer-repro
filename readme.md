# livestore-arraybuffer-repro

## Development

You have to install [Devbox](https://jetify.com/devbox) on your system and then execute:

```sh
devbox run dev
```

**Important:** On the first start the setup will ask for your root password. This is required as the reverse proxy (`Caddy`) will inject a self-signed certificate into your local keychain. This makes your browser not complaining when interacting with the app locally.

Afterwards point your browser to https://localhost
