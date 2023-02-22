import VProblemList from './VProblemList'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useRouter } from 'next/router'

const VAC = dynamic(import('react-vac'), { ssr: false })

type Props = {
  list: Problem[]
}

const ProblemList = ({ list }: Props) => {
  const router = useRouter()
  const vProblemListProps = {
    list: list.map((data, idx) => ({
      ...data,
      handleRowClick: () => {
        router.push(`/problem/${data.id}`)
      },
    })),
  }
  return (
    <>
      <VProblemList />
      <Suspense>
        <VAC name="VProblemList" data={vProblemListProps} useList="list" />
      </Suspense>
    </>
  )
}

export default ProblemList
