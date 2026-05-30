type ProjectBannerImageProps = {
  src: string
  alt: string
  active: boolean
  boost?: boolean
}

export function ProjectBannerImage({ src, alt, active, boost }: ProjectBannerImageProps) {
  return (
    <img
      className={`project-banner-img ${active ? 'project-banner-img--on' : ''} ${boost ? 'project-banner-img--boost' : ''}`}
      src={src}
      alt={alt}
      width={1536}
      height={1024}
      loading={active ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
    />
  )
}
