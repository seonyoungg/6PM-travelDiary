import { getApiUrl } from "@/lib/api/apiConfig";
import { getAuthHeader } from "@/lib/api/tokenConfig";
import { ApiResPromise } from "@/types/api";
import { GetPlanDetailProps } from "@/types/plan";

/**
 * 사용자가 작성한 여행 계획(type=plan) 게시물 목록을 조회
 *
 * @returns {Promise<ApiRes<GetPlanDetailProps[]>>} 여행 계획 게시물 배열을 포함한 응답 객체
 */
export async function getPlanListUser(token: string | null): Promise<{ ok: 1; item: GetPlanDetailProps[] }> {
  // 1. 요청을 보내고(fetch)
  const res = await fetch(`${getApiUrl()}/posts/users?type=plan`, {
    method: "GET",
    headers: getAuthHeader(token),
  });

  // 2. 성공/실패의 판단
  if (!res.ok) {
    throw new Error("사용자 여행 계획 조회 실패");
  }

  // 3. 성공한 데이터의 반환
  return res.json();
}

// console UI 관련 메시지 결정 삭제
