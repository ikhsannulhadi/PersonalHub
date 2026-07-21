export interface ModpackEntry {
  id: string
  name: string
  description: string
  version: string
  url: string
  icon: string
  source?: string
}

export interface ModpackData {
  berkas: ModpackEntry[]
}
