import { useState } from 'react'

type TCallback = () => any
type HookLoading = (status: boolean) => [boolean, (callback: TCallback) => Promise<any>]

const useLoading: HookLoading = (status = false) => {
  const [loading, setLoading] = useState(status)
  const withLoading = async (callback: TCallback): Promise<any> => {
    setLoading(true)
    try {
      const response = await callback()
      setLoading(false)
      return response
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  return [loading, withLoading]
}
export default useLoading
