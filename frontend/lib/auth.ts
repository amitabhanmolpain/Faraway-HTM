export interface AuthUser {
  id: string
  email: string
  name: string
}

export interface AuthResponse {
  user: AuthUser
  access_token: string
}

export function getBackendBaseUrl(): string {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL?.trim()
  if (backendUrl) return backendUrl
  return 'http://localhost:5000'
}

export async function authRequest<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const baseUrl = getBackendBaseUrl()
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(payload?.message || 'Authentication request failed')
  }

  return payload as T
}
