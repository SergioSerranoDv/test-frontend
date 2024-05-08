import { ApiProps, ApiResponse } from "../types/Api"

export const backendApiCall = async (apiData: ApiProps): Promise<ApiResponse> => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL as string}${apiData.endpoint}`, {
      method: apiData.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData.body),
    })
    const data = await res.json()
    if (data.status === "error") {
      return { data: null, status: "error", message: data.message }
    }
    return { data: data.data, status: "success", message: data.message }
  } catch (error: any) {
    return { data: null, status: "error", message: error.message }
  }
}
