import { api } from '@api/index'
import { GetServerSideProps } from 'next'

const ProblemDetailPage = ({
  title,
  context,
  max_cpu_time,
  max_memory,
}: Problem) => {
  return (
    <>
      <h1>{title}</h1>
      <p>시간 제한 : {max_cpu_time}ms</p>
      <p>메모리 사용량 : {max_memory}MB</p>
      <div dangerouslySetInnerHTML={{ __html: context }} />
    </>
  )
}

export default ProblemDetailPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await api.problemService.problemDetail(Number(context.params!.id))
  return {
    props: res,
  }
}
