export const siteConfig = {
    name: "Vestern",
    description: "AI-powered investment platform",
    url: process.env.NEXT_PUBLIC_APP_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    links: {
      twitter: "https://twitter.com/vestern",
      github: "https://github.com/vestern",
    },
  }
  
  export type SiteConfig = typeof siteConfig
  
  