import { ApiProps, ApiResponse } from "../types/Api"
export const fetchActiveNotes = async () => {
  const response = await fetch("http://localhost:50000/v1/notes/all/active")
  return response.json()
}
export const createNewNote = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  data: any
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "POST", endpoint: `notes/new`, body: data })
}
export const deleteNote = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  id: number
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "DELETE", endpoint: `notes/delete/${id}` })
}
export const updateNote = async (
  backendApiCall: (data: ApiProps) => Promise<ApiResponse>,
  id: number,
  data: any
): Promise<ApiResponse> => {
  return await backendApiCall({ method: "PUT", endpoint: `notes/update/${id}`, body: data })
}
