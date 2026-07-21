import type { SiteConfig } from '@/types/site'

export const site: SiteConfig = {
  profile: {
    name: 'San Dreamin',
    avatar: 'TD',
    avatarImage: 'https://i.imgur.com/pIpbUEF.png',
    bio: 'My name is San Dreamin, I am a Larp Streamer (yeah).',
    description: 'Kalian bisa panggil aku San, bisa sawer juga di Tako dan follow social media ku ya, Terimakasih.',
  },
  socialLinks: [
    { label: 'Tako', href: 'https://tako.id/TokyoDreamin', icon: 'TK', iconImage: 'https://avatars.githubusercontent.com/u/139215619?s=200&v=4' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@tokyodreamin', icon: 'TT', iconImage: 'https://cdn.simpleicons.org/tiktok/ff0050' },
    { label: 'Discord', href: 'https://discord.com/invite/uUxZzaaURj', icon: 'DC', iconImage: 'https://cdn.simpleicons.org/discord/5865f2' },
    { label: 'YouTube', href: 'https://www.youtube.com/@hdhereyo', icon: 'YT', iconImage: 'https://cdn.simpleicons.org/youtube/ff0000' },
  ],
  footer: {
    version: '',
    copyright: '© 2026 San Dreamin',
  },
  seo: {
    title: 'San Dreamin',
    description: 'A personal hub for social links and community.',
  },
}
