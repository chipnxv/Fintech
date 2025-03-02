"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { User, LoginCredentials, SignupCredentials } from "../types/auth"
import * as authApi from "@/lib/api/auth"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for stored token and validate
    const token = localStorage.getItem("token")
    if (token) {
      // Validate token and set user
    }
    setLoading(false)
  }, [])

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authApi.login(credentials)
      localStorage.setItem("token", response.token)
      setUser(response.user)
      router.push("/dashboard")
    } catch (error) {
      throw error
    }
  }

  const signup = async (credentials: SignupCredentials) => {
    try {
      const response = await authApi.signup(credentials)
      localStorage.setItem("token", response.token)
      setUser(response.user)
      router.push("/dashboard")
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    router.push("/")
  }

  return {
    user,
    loading,
    login,
    signup,
    logout,
  }
}

