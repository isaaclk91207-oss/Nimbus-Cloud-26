import nimbuscloudLogo from '../assets/nimbuscloud_icon_logo.jpg'

/**
 * Logo
 * The NimbusCloud brand mark + wordmark.
 *
 * Props:
 *   onClick  {function}  Called when the logo is clicked
 *   size     {'sm'|'md'} Controls icon & text size
 */
export default function Logo({ onClick, size = 'md' }) {
  const iconSize = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'
  const textSize = size === 'sm' ? 'text-base' : 'text-lg'

  return (
    <div
      className="flex items-center gap-2 cursor-pointer select-none"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      aria-label="NimbusCloud â go to homepage"
    >
      {/* Icon */}
      <img
        src={nimbuscloudLogo}
        alt="NimbusCloud Icon"
        className={`${iconSize} object-contain`}
        style={{ 
          objectPosition: 'center',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}
      />
      
      {/* Text */}
      <span
        className={`font-display ${textSize} text-white tracking-tight`}
        style={{ fontWeight: 700 }}
      >
        Nimbus<span style={{ color: '#38bdf8' }}>Cloud</span>
      </span>
    </div>
  )
}
