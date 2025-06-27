'use client'
import { SiteSettings } from '@/sanity/types/Settings'
import React from 'react'
import Press from '../press/press.component'
import Menu from '../headerInteractive/headerinteractive.client'

type HeaderProps = {
  settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
  return (
    <Menu
      social={settings.social}
      title={settings.title}
      description={settings.description}
      mission={settings.mission}
      pressContent={<Press />}
    />
  )
}