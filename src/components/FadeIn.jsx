import { useInView } from '../hooks'

/**
 * FadeIn
 * Wraps children in a div that fades + slides up when it enters the viewport.
 *
 * Props:
 *   delay     {number}  CSS transition-delay in seconds   (default: 0)
 *   className {string}  Extra Tailwind / custom classes
 *   children  {node}
 */
export default function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
