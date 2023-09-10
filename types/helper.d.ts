type Values<T> = T[keyof T]

type OverrideType<T1, T2> = Omit<T1, keyof T2> & T2
