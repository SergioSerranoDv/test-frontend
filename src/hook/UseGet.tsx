import { useEffect, useState } from "react"
import { backendApiCall } from "../services/Api"
export const UseGet = (endpoint: string) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendApiCall({ method: "GET", endpoint: `${endpoint}` })
        if (response.status === "success") {
          setData(response.data)
          setIsLoading(false)
        }
      } catch (error: any) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return { data, error, isLoading }
}
