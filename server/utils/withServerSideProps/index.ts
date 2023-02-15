import { RemoteError } from '@api/error/remoteError'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export default function withGetServerSideProps(
  getServerSideProps: GetServerSideProps
): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context)
    } catch (error) {
      if (error instanceof RemoteError) {
        return {
          props: {
            error: JSON.parse(JSON.stringify(error)),
          },
        }
      }
      console.error('unhandled error', error)
      throw error
    }
  }
}
