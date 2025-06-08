declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_NODE_ENV: string
      NEXT_PUBLIC_GA_ID: string
      NEXT_PUBLIC_BASIC_REALM_USER?: string
      NEXT_PUBLIC_BASIC_REALM_PWD?: string
    }
  }
}

export {}
