import { ApiProps, ApiResponse } from "../types/Api"

export const createNewLabel = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  data: any
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "POST", endpoint: `labels/new`, body: data })
}
export const deleteLabelById = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  id: number
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "DELETE", endpoint: `labels/delete/${id}` })
}

export const updateLabel = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  data: any
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "PUT", endpoint: `labels/update`, body: data })
}
