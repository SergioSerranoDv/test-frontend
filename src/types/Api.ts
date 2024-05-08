export interface ApiProps {
  endpoint: string
  method: string
  body?: any
}
export interface ApiResponse {
  data: any
  status: string
  message: string
}
