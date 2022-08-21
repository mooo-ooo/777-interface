
import React, { useCallback } from "react"
import { Flex, Text } from 'rebass'
import Link from 'components/Link'
import Dropdown from 'components/Dropdown'
import useToken, { UserProps } from 'hooks/useToken'

const UserDetail: React.FC<{user: UserProps | null}> = ({ user }) => {
  const { username, balance } = user || { username: '', balance: null }
  const { removeToken } = useToken()
  return (
    <Flex ml="8px">
      <Dropdown key={username} target={<Text mr='8px'>{username.length > 8 ? `${username.substring(0, 7)}...` : username}</Text>} position="bottom">
        <Link href="/profile" aria-label="profile" color="#0ea79b">
          Profile
        </Link>
        <Text style={{ cursor: "pointer"}} onClick={removeToken} mt="8px" color="#0ea79b">Logout</Text>
      </Dropdown>
      <Text>{balance}</Text>
    </Flex>
  )
}

export default UserDetail