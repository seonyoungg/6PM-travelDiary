import { getClientId } from "@/lib/api/apiConfig";

export function getAuthHeader(token: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Client-Id": getClientId(),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}
