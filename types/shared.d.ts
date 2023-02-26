interface Pagination<T> {
  content: T[]
  page_number: number
  total_pages: number
  total_elements: number
}

type ReduxSliceItem<T> = T & { isInit?: boolean }
