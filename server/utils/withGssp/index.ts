import { RemoteError } from '@api/error/remoteError'
import { GetServerSideProps } from 'next'

export default function withGssp(
  getServerSideProps: GetServerSideProps
): GetServerSideProps {
  return async (context) => {
    try {
      return await getServerSideProps(context)
    } catch (error) {
      if (!(error instanceof RemoteError)) {
        console.error('unhandled error', error)
        throw error
      }
      return {
        props: {
          error: JSON.parse(JSON.stringify(error)),
        },
      }
    }
  }
}
