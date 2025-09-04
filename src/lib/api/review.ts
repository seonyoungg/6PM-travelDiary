import { getApiUrl } from "@/lib/api/apiConfig";
import { getAuthHeader } from "@/lib/api/tokenConfig";
import { ApiResPromise } from "@/types/api";
import { GetReviewDetailProps } from "@/types/review";

/**
 * 사용자가 작성한 리뷰(type=reviewAll) 게시물 목록을 조회
 *
 * @returns {Promise<ApiRes<GetReviewDetailProps[]>>} 여행 계획 게시물 배열을 포함한 응답 객체
 */
export async function getReviewAllUser(token: string | null): ApiResPromise<GetReviewDetailProps[]> {
  try {
    const res = await fetch(`${getApiUrl()}/posts/users?type=reviewAll`, {
      method: "GET",
      headers: getAuthHeader(token),
    });
    return res.json();
  } catch (err) {
    console.error("사용자 여행 전체리뷰 조회 실패:", err);
    return {
      ok: 0,
      message: "사용자의 여행 전체리뷰 목록을 불러오는 데 실패했습니다.",
    };
  }
}

/**
 * 사용자가 작성한 리뷰(type=reviewDaily) 게시물 목록을 조회
 *
 * @returns {Promise<ApiRes<GetReviewDetailProps[]>>} 여행 계획 게시물 배열을 포함한 응답 객체
 */
export async function getReviewDailyUser(token: string | null): ApiResPromise<GetReviewDetailProps[]> {
  try {
    const res = await fetch(`${getApiUrl()}/posts/users?type=reviewDaily`, {
      method: "GET",
      headers: getAuthHeader(token),
    });
    return res.json();
  } catch (err) {
    console.error("사용자 여행 일별리뷰 조회 실패:", err);
    return {
      ok: 0,
      message: "사용자의 여행 일별리뷰 목록을 불러오는 데 실패했습니다.",
    };
  }
}

/**
 * 사용자가 작성한 리뷰(type=reviewPlace) 게시물 목록을 조회
 *
 * @returns {Promise<ApiRes<GetReviewDetailProps[]>>} 여행 계획 게시물 배열을 포함한 응답 객체
 */
export async function getReviewPlaceUser(token: string | null): ApiResPromise<GetReviewDetailProps[]> {
  try {
    const res = await fetch(`${getApiUrl()}/posts/users?type=reviewPlace`, {
      method: "GET",
      headers: getAuthHeader(token),
    });
    return res.json();
  } catch (err) {
    console.error("사용자 여행 장소별 리뷰 조회 실패:", err);
    return {
      ok: 0,
      message: "사용자의 여행 장소별 리뷰 목록을 불러오는 데 실패했습니다.",
    };
  }
}
