import type { SiteConfig } from '@/types/site'

export const site: SiteConfig = {
  profile: {
    name: 'San Dreamin',
    avatar: 'TD',
    avatarImage: 'https://i.postimg.cc/5ttfQr19/Chat-GPT-Image-Jul-8-2026-06-45-08-AM.png',
    bio: 'My name is San Dreamin, I am a Larp Streamer (yeah).',
    description: 'Kalian bisa panggil aku San, bisa sawer juga di Tako dan follow social media ku ya, Terimakasih.',
  },
  socialLinks: [
    { label: 'Tako', href: 'https://tako.id/TokyoDreamin', icon: 'TK', iconImage: 'https://avatars.githubusercontent.com/u/139215619?s=200&v=4' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@tokyodreamin', icon: 'TT', iconImage: 'https://cdn.simpleicons.org/tiktok/ff0050' },
    { label: 'Discord', href: 'https://discord.com/invite/uUxZzaaURj', icon: 'DC', iconImage: 'https://cdn.simpleicons.org/discord/5865f2' },
    { label: 'YouTube', href: 'https://www.youtube.com/@hdhereyo', icon: 'YT', iconImage: 'https://cdn.simpleicons.org/youtube/ff0000' },
    { label: 'Link Modpack', href: 'https://linktr.ee/tokyodreamin', icon: 'LM', iconImage: 'https://static.wikia.nocookie.net/logopedia/images/f/f9/Minecraft_Bedrock_icon.svg/revision/latest/scale-to-width-down/250?cb=20230924021517' },
    { label: 'Server Minecraft', href: 'https://tokyo-dreamin-minecraft-server.vercel.app/', icon: 'SM', iconImage: 'https://i.imgur.com/cwFOWgq.png' },
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
