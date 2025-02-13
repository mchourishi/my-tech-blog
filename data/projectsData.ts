interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'YouTube Clone',
    description: `Simple YouTube UI clone built with React, JavaScript and YouTube v3 APIs`,
    imgSrc: '/static/images/youtube-clone.jpg',
    href: 'https://silly-selkie-d8c1e7.netlify.app/',
  },
  {
    title: 'YouTube Ads Blocker Chrome Extension',
    description: `Chrome extension to block ads on YouTube. Built this extension for personal use to avoid ads while I am learning.`,
    imgSrc: '/static/images/ads-blocker.png',
    href: 'https://github.com/mchourishi/youtube-ad-blocker',
  },
  {
    title: 'Fullstack Notes App',
    description: `Fullstack Notes App built with React (frontend), NodeJS (BFF), Python (FastAPI) and MongoDB.`,
    imgSrc: '/static/images/notes-app.jpg',
    href: 'https://github.com/mchourishi/fullstack-notes-app',
  },
]

export default projectsData
