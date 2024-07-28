import React, { ReactNode, useState } from 'react'

type Props = {
  children: ReactNode,
  label: string
  positioningStyles?: string, 
  labelHoveringPositionStyles?: string,
  id?: string,
  ariaLabel?: string,
}

const ButtonWithHoverLabel: React.FC<Props> = ({ariaLabel, positioningStyles, labelHoveringPositionStyles, children, label}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}   
      className={positioningStyles || "defaultPositioning"}
      aria-label={ariaLabel}
    >
      {children}
      {isHovering &&
        <div className={`fadeInElementQuick buttonLabel ${labelHoveringPositionStyles}`} >
          {label}
        </div>
      }
    </div>
  )
}

export default ButtonWithHoverLabel