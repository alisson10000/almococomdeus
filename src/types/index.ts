export interface Song {
  id: number
  title: string
  composer: string
  youtubeUrl?: string
  youtubeId?: string
  titleVerified: boolean
}

export interface Invitation {
  id: number
  title: string
  description: string
  image: string
  downloadUrl?: string
  downloadName: string
  downloadLabel?: string
}
