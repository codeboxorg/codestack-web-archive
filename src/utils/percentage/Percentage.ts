const comparePercentage = (base: number, compare: number) => {
    if (base === 0 || compare === 0) return 0
    return (compare / base) * 100
}

export const Percentage = {
    comparePercentage,
}
