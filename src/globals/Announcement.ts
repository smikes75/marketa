import type { GlobalConfig } from 'payload'

export const Announcement: GlobalConfig = {
  slug: 'announcement',
  label: 'Oznámení',
  admin: {
    group: 'Nastavení',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Zobrazit oznámení',
      defaultValue: true,
    },
    {
      name: 'message',
      type: 'text',
      label: 'Text oznámení',
      defaultValue: 'V současné době nepřijímáme nové pacienty',
    },
    {
      name: 'type',
      type: 'select',
      label: 'Typ oznámení',
      defaultValue: 'warning',
      options: [
        { label: 'Informace (modrá)', value: 'info' },
        { label: 'Upozornění (oranžová)', value: 'warning' },
        { label: 'Důležité (červená)', value: 'error' },
        { label: 'Úspěch (zelená)', value: 'success' },
      ],
    },
  ],
}
