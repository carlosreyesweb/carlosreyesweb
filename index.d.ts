import { Environment } from "@/environment"

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}

export {}
