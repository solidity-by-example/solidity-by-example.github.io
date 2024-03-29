import React from "react"

interface Props {
  size: number
  className?: string
}

const CryptoJobsList: React.FC<Props> = ({ size, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 113 113"
      xmlSpace="preserve"
      width={size}
      height={size}
      className={className}
    >
      <circle cx={56.5} cy={56.5} r={56.5} fill="#453dff" stroke="none" />
      <path
        fill="#fff"
        stroke="none"
        d="M68.476 46.383c.454.796 1.36 1.82 2.155 1.82 4.31.227 8.62.113 13.157.113-.567-3.98-2.042-7.392-4.31-10.462-1.361-1.706-1.701-2.957-.34-4.89 1.36-1.82 2.381-4.094 3.63-6.255-3.97-2.274-7.827-4.435-11.797-6.709-1.36 2.274-2.609 4.321-3.743 6.482-.68 1.365-1.36 1.706-2.949 1.478-3.63-.455-7.259-.91-10.888-.682-10.889.682-19.85 7.96-22.798 18.423-3.29 11.94-1.702 22.97 6.805 32.523-1.588 2.843-3.29 5.8-4.99 8.87 4.083 2.275 7.826 4.55 11.795 6.824 1.588-2.73 3.063-5.231 4.424-7.733.68-1.251 1.588-1.365 2.949-1.479 4.65 0 9.3.228 13.724-.682 9.3-1.82 17.354-10.803 18.375-20.128-4.084 0-7.94.113-11.91 0-1.588 0-2.609.455-3.403 1.933-4.537 7.62-15.312 8.87-21.21 2.502-5.557-5.914-5.557-18.764.114-24.677 6.011-6.141 16.56-4.777 21.21 2.729z"
      />
    </svg>
  )
}

export default CryptoJobsList
