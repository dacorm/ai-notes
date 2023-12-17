/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GPT_API_KEY: process.env.GPT_API_KEY,
    },
};

module.exports = nextConfig;
