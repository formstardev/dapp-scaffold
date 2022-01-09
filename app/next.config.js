/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@blocto/sdk',
  '@project-serum/sol-wallet-adapter',
  '@gokiprotocol/walletkit',
  '@saberhq/use-solana'
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
});
