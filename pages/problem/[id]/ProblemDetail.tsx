import { useRootState } from '@hooks/useRootSelector'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import VProblemDetail from './VProblemDetail'

const VAC = dynamic(import('react-vac'), { ssr: false })

const ProblemDetail = () => {
  const problemDetail = useRootState((state) => state.problem.problem)

  const vProblemDetailProps = {
    ...problemDetail,
  }

  return (
    <>
      <VProblemDetail />
      <Suspense>
        <VAC name="VProblemDetail" data={vProblemDetailProps} />
      </Suspense>
    </>
  )
}

export default ProblemDetail
