export const Config = {
  creator: 'FIQTOR',
  description:
    'Learning website, portfolio, fullstack website developer',
  keyword:
    'fiqtor, FIQTOR, taufiiqul hakim, programming tips, belajar javascript, belajar typescript, Code Academy',
  authors: {
    name: 'Taufiiqul Hakim',
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: 'Code Academy',
    locale: 'id-ID',
  },
  icons: {
    icon: '/icon.jpeg',
    shortcut: '/icon.jpeg',
    apple: '/icon.jpeg',
    other: {
      rel: 'favicon',
      url: '/icon.jpeg',
    },
  },
  exTitle: '| Code Academy',
  profile: 'https://avatars.githubusercontent.com/u/117913964?v=4',
  githubUsername: process.env.GITHUB_USERNAME,
  githubToken: process.env.GITHUB_TOKEN,
  wakatimeUsername: '@FIQTOR',
  wakatimeSecretKey: process.env.WAKATIME_APP_SECRET,
};