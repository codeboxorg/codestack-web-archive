interface Pagination<T> {
    content: T[]
    page_number: number
    total_pages: number
    total_elements: number
}

type ReduxSliceItem<T> = T & { isInit?: boolean }

type HookFormSubmit = (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>

type HookFormInput<T extends string> = {
    register?: UseFormRegisterReturn<T>
    status: InputStatus
    message?: string
    roles?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}
