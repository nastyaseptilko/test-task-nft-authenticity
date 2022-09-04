# test-task-nft-authenticity

Firebase Cloud Function that uses the NFT token address and verifies its authenticity in the Solana (Mainnet) network.

## Start local emulator firebase

To run locally:

```
firebase serve -p 3000
```

![telegram-cloud-photo-size-2-5235879259598341131-y](https://user-images.githubusercontent.com/43143943/188335534-9032088e-9fda-4c3d-a4be-936705598626.jpg)

## Test API

Positive case - NFT token is original

![telegram-cloud-photo-size-2-5235879259598341127-y](https://user-images.githubusercontent.com/43143943/188335511-d62455a8-62bc-43b1-bc84-41036e40d2f7.jpg)

Negative case - NFT token is not original

![telegram-cloud-photo-size-2-5235879259598341183-y](https://user-images.githubusercontent.com/43143943/188335709-67d9ca19-fe21-4c29-8181-78bd860c42d3.jpg)
