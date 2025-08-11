import type React from "react"

interface TriangleLightningIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string
  lightningColor?: string
  size?: number
}

export const TriangleLightningIcon: React.FC<TriangleLightningIconProps> = ({ 
  color = "#FF0000", 
  lightningColor = "#FFFFFF",
  size = 64,
  ...props 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    {/* Rounded triangle */}
    <path 
      d="M32 8C33.1046 8 34.1362 8.57322 34.6708 9.5L54.6708 45.5C55.2054 46.4268 55.2054 47.5732 54.6708 48.5C54.1362 49.4268 53.1046 50 52 50H12C10.8954 50 9.86384 49.4268 9.32918 48.5C8.79453 47.5732 8.79453 46.4268 9.32918 45.5L29.3292 9.5C29.8638 8.57322 30.8954 8 32 8Z" 
      fill={color}
    />
    
    {/* Lightning bolt */}
    <path 
      d="M28 20L24 32H30L26 44L38 28H32L36 20H28Z" 
      fill={lightningColor}
    />
  </svg>
)

// Predefined color variants
export const RedTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#FF0000" {...props} />
)

export const BlueTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#0066FF" {...props} />
)

export const GreenTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#00CC44" {...props} />
)

export const OrangeTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#FF6600" {...props} />
)

export const YellowTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#FFD700" {...props} />
)

export const PinkTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#FF1493" {...props} />
)

export const TealTriangleLightningIcon: React.FC<Omit<TriangleLightningIconProps, 'color'>> = (props) => (
  <TriangleLightningIcon color="#14B8A6" {...props} />
)