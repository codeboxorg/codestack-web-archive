const stieUrl = process.env.NEXT_SERVER_BASE_URL || 'codestack.co.kr'
module.exports = {
  siteUrl: stieUrl,
  generateRobotsTxt: true,
  exclude: ['/sitemap/problem-sitemap.xml', '/error', '/submission'],
}
