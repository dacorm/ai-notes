/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GPT_API_KEY: process.env.VITE_GPT_API_KEY,
    },
};

module.exports = nextConfig;
