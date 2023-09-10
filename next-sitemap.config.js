const SITE_URL = process.env.NEXT_SERVER_BASE_URL ?? 'https://www.codestack.co.kr'

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    exclude: ['/sitemap/problem-sitemap.xml', '/error', '/submission'],
}
