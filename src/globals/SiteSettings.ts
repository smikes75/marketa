import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Nastavení webu',
  admin: {
    group: 'Nastavení',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Základní informace',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              label: 'Název ordinace',
              defaultValue: 'MUDr. Markéta Plašilová',
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Podtitulek',
              defaultValue: 'Praktický lékař pro dospělé',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Popis ordinace',
            },
          ],
        },
        {
          label: 'Tým',
          fields: [
            {
              name: 'team',
              type: 'array',
              label: 'Členové týmu',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Jméno',
                  required: true,
                },
                {
                  name: 'role',
                  type: 'text',
                  label: 'Pozice',
                  required: true,
                },
                {
                  name: 'photo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Fotografie',
                },
              ],
            },
          ],
        },
        {
          label: 'Kontakt',
          fields: [
            {
              name: 'address',
              type: 'group',
              label: 'Adresa',
              fields: [
                {
                  name: 'street',
                  type: 'text',
                  label: 'Ulice',
                  defaultValue: 'Novosibřinská 111',
                },
                {
                  name: 'city',
                  type: 'text',
                  label: 'Město',
                  defaultValue: 'Praha 9 - Běchovice',
                },
                {
                  name: 'zip',
                  type: 'text',
                  label: 'PSČ',
                  defaultValue: '190 16',
                },
              ],
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Telefon',
              defaultValue: '+420 281 970 369',
            },
            {
              name: 'email',
              type: 'email',
              label: 'E-mail',
              defaultValue: 'prakticky-lekar@seznam.cz',
            },
          ],
        },
        {
          label: 'Ordinační doba',
          fields: [
            {
              name: 'officeHours',
              type: 'array',
              label: 'Ordinační hodiny',
              fields: [
                {
                  name: 'day',
                  type: 'select',
                  label: 'Den',
                  options: [
                    { label: 'Pondělí', value: 'monday' },
                    { label: 'Úterý', value: 'tuesday' },
                    { label: 'Středa', value: 'wednesday' },
                    { label: 'Čtvrtek', value: 'thursday' },
                    { label: 'Pátek', value: 'friday' },
                  ],
                  required: true,
                },
                {
                  name: 'from',
                  type: 'text',
                  label: 'Od',
                  required: true,
                },
                {
                  name: 'to',
                  type: 'text',
                  label: 'Do',
                  required: true,
                },
                {
                  name: 'note',
                  type: 'text',
                  label: 'Poznámka',
                },
              ],
            },
            {
              name: 'officeHoursNote',
              type: 'textarea',
              label: 'Poznámka k ordinační době',
              defaultValue: 'Doporučujeme objednání předem. Akutní pacienti jsou přijímáni bez objednání dle aktuálních možností ordinace.',
            },
          ],
        },
        {
          label: 'Pojišťovny',
          fields: [
            {
              name: 'insurances',
              type: 'array',
              label: 'Smluvní pojišťovny',
              fields: [
                {
                  name: 'code',
                  type: 'text',
                  label: 'Kód',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  label: 'Název',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Služby',
          fields: [
            {
              name: 'services',
              type: 'array',
              label: 'Nabízené služby',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Název služby',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
