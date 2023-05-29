import LoadingDot from '../LoadingDot'

function PageLoading() {
  return (
    <div
      style={{ zIndex: '9999' }}
      className="fixed bg-black/25 top-0 left-0 right-0 bottom-0 flex flex-center"
    >
      <LoadingDot />
    </div>
  )
}

export default PageLoading
