import { useState, useCallback } from 'react'
import { post, get } from 'utils/http'
import useToken from 'hooks/useToken'
import { useWeb3React, useWeb3LibraryContext } from '@pancakeswap/wagmi'

const useLogin = () => {
  const { account } = useWeb3React()
  const library = useWeb3LibraryContext()
  const [isSignInloading, setIsLoading] = useState(false)

  const { setToken } = useToken()

  const signIn = useCallback(async() => {
    setIsLoading(true)
    const { parsedBody: { status }} = await get<{ status: string }>(`https://api-mode3.fifafootball.io/v1/public/check-user/${account}`)
    const isExisted = status === "ACTIVE"
    const timestamp = new Date().valueOf()

    const DOMAIN = [
      {name: "url", type: "string"},
      {name: "time", type: "uint256"},
    ];

    const DATA = [
      {name: "action", type: "string"},
      {name: "user", type: "address"},
    ];

    const msgParams = {
      domain: {
          url: "https://fifafootball.io/",
          time: timestamp
      },
      message: {
          action: "Login",
          user: account,
      },
      primaryType: "Data",
      types: {
          EIP712Domain: DOMAIN,
          Data: DATA,
      },
    };
    library
      .send('eth_signTypedData_v4', [account, JSON.stringify(msgParams)])
      .then(async(signature) => {
        const { parsedBody } = await post<{
          token: string,
        }>(!isExisted ? 'https://api-mode3.fifafootball.io/v1/user/signup' : 'https://api-mode3.fifafootball.io/v1/user/login', {
            address: account, timestamp, signature
          }
        )
        const { token: tokenResp } = parsedBody
        if (tokenResp) {
          setToken(tokenResp)
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setIsLoading(false))
  }, [account, library, setToken])

  return { signIn, isSignInloading }
}
export default useLogin
