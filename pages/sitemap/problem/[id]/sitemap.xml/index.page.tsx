// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { api } from '@api/index'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = Number(ctx.params!.id)
  const problem = await api.problemService.problemList(id)
  const fields = problem.content.map((element) => ({
    loc: `${process.env.NEXT_SERVER_BASE_URL}/problem/${element.id}`, // Absolute url
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}
