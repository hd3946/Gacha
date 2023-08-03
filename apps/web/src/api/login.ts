const API_HOST = 'http://localhost:8080'

export const getUser = async (accessToken: string) => {
  const res = await fetch(`${API_HOST}/api/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;chaset=utf-8',
      Authorization: `Bearer ${accessToken}`
    },
    credentials: 'include'
  })
  const user = await res.json()
  return user
}

export const login = async (address: string, signatureAndChallenge: string) => {
  const body = {
    address: address,
    signatureAndChallenge: signatureAndChallenge
  }
  return fetch(`${API_HOST}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;chaset=utf-8' },
    body: JSON.stringify(body),
    credentials: 'include'
  })
}

export const logout = (accessToken: string) => {
  return fetch(`${API_HOST}/api/auth/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;chaset=utf-8',
      Authorization: `Bearer ${accessToken}`
    },
    credentials: 'include'
  })
}

export const refresh = () => {
  return fetch(`${API_HOST}/api/auth/refresh`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;chaset=utf-8'
    },
    credentials: 'include'
  })
}
