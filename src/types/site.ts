export interface LinkItem {
  label: string
  href: string
  icon: string
  iconImage?: string
}

export interface SiteConfig {
  profile: {
    name: string
    bio: string
    description: string
    avatar: string
    avatarImage?: string
  }
  socialLinks: LinkItem[]
  footer: {
    version: string
    copyright: string
  }
  seo: {
    title: string
    description: string
  }
}
