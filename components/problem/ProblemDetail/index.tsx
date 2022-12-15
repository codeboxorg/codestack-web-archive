import { getProblem } from '@pages/problem/problemSlice'
import { useSelector } from 'react-redux'

const ProblemDetail = () => {
  const { title, max_cpu_time, max_memory, context } = useSelector(getProblem)
  return (
    <>
      <h1>{title}</h1>
      <p>시간 제한 : {max_cpu_time}ms</p>
      <p>메모리 사용량 : {max_memory}MB</p>
      <div dangerouslySetInnerHTML={{ __html: context }} />
    </>
  )
}

export default ProblemDetail
