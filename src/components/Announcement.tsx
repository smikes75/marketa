type AnnouncementType = 'info' | 'warning' | 'error' | 'success'

interface AnnouncementProps {
  message: string
  type?: AnnouncementType
  enabled?: boolean
}

const typeStyles: Record<AnnouncementType, string> = {
  info: 'bg-blue-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  success: 'bg-green-500',
}

export function Announcement({ message, type = 'warning', enabled = true }: AnnouncementProps) {
  if (!enabled) return null

  return (
    <div className={`${typeStyles[type]} text-white py-3 px-4 text-center`}>
      <div className="container mx-auto flex items-center justify-center gap-2">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  )
}
