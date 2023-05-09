declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?: string
      NEXT_PUBLIC_GOOGLE_ADSENSE_ID?: string
    }
  }
}

export {}
