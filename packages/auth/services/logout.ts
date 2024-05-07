export function logout(): void {
  localStorage.removeItem('accessToken');
}
