import type { CollectionConfig } from 'payload'

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'preferredDate', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Jméno a příjmení',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'birthDate',
      type: 'date',
      label: 'Datum narození',
    },
    {
      name: 'preferredDate',
      type: 'date',
      label: 'Preferovaný termín',
    },
    {
      name: 'preferredTime',
      type: 'select',
      label: 'Preferovaný čas',
      options: [
        { label: 'Dopoledne (7:00 - 12:00)', value: 'morning' },
        { label: 'Odpoledne (12:00 - 18:00)', value: 'afternoon' },
        { label: 'Kdykoli', value: 'any' },
      ],
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'Důvod návštěvy',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Stav',
      defaultValue: 'new',
      options: [
        { label: 'Nová', value: 'new' },
        { label: 'Potvrzená', value: 'confirmed' },
        { label: 'Zamítnutá', value: 'rejected' },
        { label: 'Dokončená', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'note',
      type: 'textarea',
      label: 'Interní poznámka',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
