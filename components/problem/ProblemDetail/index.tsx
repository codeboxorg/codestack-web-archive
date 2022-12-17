import { getProblem } from '@pages/problem/problemSlice'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const ProblemDetail = () => {
  const { id, title, max_cpu_time, max_memory, context } =
    useSelector(getProblem)
  return (
    <>
      <Head>
        <title>
          {id} : {title}
        </title>
      </Head>
      <div className="container m-auto">
        <div className="p-5">
          <h1 className="text-2xl text-center md:text-4xl">{title}</h1>
        </div>

        <div className="py-40">
          <div dangerouslySetInnerHTML={{ __html: context }} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          제출
        </button>
      </div>
    </>
  )
}

export default ProblemDetail
