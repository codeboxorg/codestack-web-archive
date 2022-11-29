import { APICreator } from './APICreator'

const baseAPI = new APICreator(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)
const githubBaseAPI = new APICreator(
  `${process.env.NEXT_PUBLIC_GITHUB_API_BASE_URL}`
)

export { baseAPI, githubBaseAPI }
