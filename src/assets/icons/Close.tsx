import * as React from 'react'

export const Close = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" color={'#1f1f1f'} {...props}>
    <path
      d="M18 6L6 18M6 6l12 12L6 6z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
