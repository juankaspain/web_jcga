/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es"
  }
}

export default nextConfig
