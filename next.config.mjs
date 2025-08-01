import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
        new NextFederationPlugin({
          name: "header",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./App": "./components/App.tsx",
          },
          shared: {
            react: { 
              singleton: true, 
              eager: true,
              requiredVersion: "^18.3.1"
            },
            "react-dom": { 
              singleton: true, 
              eager: true,
              requiredVersion: "^18.3.1"
            },
            "@reduxjs/toolkit": { 
              singleton: true, 
              eager: true,
              requiredVersion: "^2.2.7"
            },
            "react-redux": { 
              singleton: true, 
              eager: true,
              requiredVersion: "^9.1.2"
            },
          },
          extraOptions: {
            exposePages: true,
            debug: true, // Enable debug mode
          },
        })
      );
    return config;
  },
};

export default nextConfig;