import { TOKEN_KEY } from 'config'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

const toAbsoluteUrl = (path: string): string => (isAbsoluteUrl(path) ? path : baseUrl + path)

interface HttpResponse<T> extends Response {
  parsedBody?: T
}

const isAbsoluteUrl = (urlString) => urlString.indexOf('http://') === 0 || urlString.indexOf('https://') === 0

const attachHeaders = (args: RequestInit): RequestInit => {
  return {
    ...args,
    headers: {
      Authorization: typeof window !== 'undefined' ? window.sessionStorage.getItem(TOKEN_KEY) : '',
      'Content-Type': 'application/json',
    },
  }
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request)
  try {
    // may error if there is no body
    response.parsedBody = await response.json()
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  if (!response.ok) {
    throw response.statusText
    // throw new Error(response.statusText)
  }
  return response
}

export async function get<T>(path: string, args: RequestInit = { method: 'get' }): Promise<HttpResponse<T>> {
  return http<T>(new Request(toAbsoluteUrl(path), attachHeaders(args)))
}

export async function post<T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'post', body: JSON.stringify(body) },
): Promise<HttpResponse<T>> {
  return http<T>(new Request(toAbsoluteUrl(path), attachHeaders(args)))
}

export async function put<T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'put', body: JSON.stringify(body) },
): Promise<HttpResponse<T>> {
  return http<T>(new Request(toAbsoluteUrl(path), attachHeaders(args)))
}
