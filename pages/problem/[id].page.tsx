import axios from 'axios'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

interface Problem {
  id: number
  title: string
  context: string
  max_cpu_time: number
  max_memory: number
}

const ProblemDetailPage = (data: Problem) => {
  return (
    <>
      <h1>{data.title}</h1>
      <p>시간 제한 : {data.max_cpu_time}ms</p>
      <p>메모리 사용량 : {data.max_memory}MB</p>

      <div dangerouslySetInnerHTML={{ __html: data.context }} />
    </>
  )
}

export default ProblemDetailPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get<Problem>(
    process.env.NEXT_PUBLIC_BASE_API_URL + `/v1/problem/${context.params!.id}`
  )

  return {
    props: res.data,
  }
}
