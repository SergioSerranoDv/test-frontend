import { ApiProps, ApiResponse } from "../types/Api"

export const deleteLabelToNote = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  noteId: number,
  labelId: number
): Promise<ApiResponse> => {
  return await backendApiCall({
    method: "DELETE",
    endpoint: `labeltonote/delete?noteId=${noteId}&labelId=${labelId}`,
  })
}
export const createLabelToNote = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  data: { noteId: number; labelId: number }
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "POST", endpoint: `labeltonote/new`, body: data })
}
