// auth helpers (client-side)
export function saveTokens({ accessToken, refreshToken }: { accessToken?: string, refreshToken?: string }){
  if (accessToken) localStorage.setItem('df_access_token', accessToken)
  if (refreshToken) localStorage.setItem('df_refresh_token', refreshToken)
}
export function clearTokens(){
  localStorage.removeItem('df_access_token')
  localStorage.removeItem('df_refresh_token')
  localStorage.removeItem('df_user')
}
