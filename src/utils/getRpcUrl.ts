// Array of available nodes to connect to
export const nodes = [process.env.NEXT_PUBLIC_NODE_PRODUCTION]

const getNodeUrl = () => {
  // Use custom node if available (both for development and production)
  // However on the testnet it wouldn't work, so if on testnet - comment out the NEXT_PUBLIC_NODE_PRODUCTION from env file
  return process.env.NEXT_PUBLIC_NODE_PRODUCTION
}

export default getNodeUrl
