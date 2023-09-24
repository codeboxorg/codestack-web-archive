import tw, { css } from 'twin.macro'

export const problemContentStyle = css`
    h1 {
        ${tw`text-xl font-semibold mt-10`}
    }

    p {
        ${tw`mb-30`}
    }

    .sample-item {
        ${tw`w-full flex gap-15 mt-35 justify-between`}

        & > div {
            ${tw`w-[50%]`}
        }
    }

    .sample-item-header {
        ${tw`flex items-center gap-10 `}

        div {
            ${tw`text-lg font-semibold`}
        }

        button {
            ${tw`border-1 border-[#bebebe] rounded-md py-2 px-10 text-sm`}
        }
    }

    .sample-data {
        ${tw`mt-10 rounded-md bg-[#f4f4f4] border-1 border-[#bebebe] py-10 px-7 text-justify whitespace-pre overflow-x-auto`}
    }

    @media only screen and (max-width: 767px) {
        .sample-item {
            ${tw`flex flex-wrap`}

            & > div {
                ${tw`w-full`}
            }
        }
    }
`
