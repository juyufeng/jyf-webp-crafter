# JyfWebpCrafter

## Introduce
- JyfWebpCrafter 是一款高效的工具，轻松将图片转换为 WebP 格式，提升网页加载速度。
- JyfWebpCrafter is an efficient tool that easily converts images to WebP format, enhancing web page loading speed.

## Install

```bash
# npm
npm install jyf-webp-crafter

# yarn
yarn add jyf-webp-crafter

# pnpm
pnpm add jyf-webp-crafter

# bun
bun add jyf-webp-crafter
```

## Usage

```ts
import { srcToWebP, blobToWebP, arrayBufferToWebP } from 'jyf-webp-crafter'

const webpBlob = await srcToWebP(pngSrc, { /** options */ })
// or
const webpBlob = await blobToWebP(pngBlob, { /** options */ })
// or
const webpBlob = await arrayBufferToWebP(jpgArrayBuffer, { /** options */ })
```
