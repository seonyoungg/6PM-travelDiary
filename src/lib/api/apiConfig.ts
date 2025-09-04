export function getApiUrl(): string {
  const API_URL = process.env.NEXT_PUBLIC_API_SERVER;
  if (!API_URL) throw new Error("API_URL이 설정되어 있지 않습니다");
  return API_URL;
}

export function getClientId(): string {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  if (!CLIENT_ID) throw new Error("CLIENT_ID가 설정되어 있지 않습니다");
  return CLIENT_ID;
}
