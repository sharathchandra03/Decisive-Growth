import React, { useMemo } from 'react'

export const FloatingPaths = React.memo(function FloatingPaths({ position = 1 }) {
    // Memoize path generation so we don't recompute on every render
    const paths = useMemo(
        () =>
            Array.from({ length: 20 }, (_, i) => {
                const id = i
                const d = `M-${380 - i * 4 * position} -${189 + i * 5}C-${
                    380 - i * 4 * position
                } -${189 + i * 5} -${312 - i * 4 * position} ${216 - i * 5} ${
                    152 - i * 4 * position
                } ${343 - i * 5}C${616 - i * 4 * position} ${470 - i * 5} ${
                    684 - i * 4 * position
                } ${875 - i * 5} ${684 - i * 4 * position} ${875 - i * 5}`

                return {
                    id,
                    d,
                    opacity: Math.max(0.06, 0.2 - i * 0.006),
                    width: Math.max(0.4, 0.8 - i * 0.02),
                }
            }),
        [position],
    )

    // Use lightweight CSS-only animations (more stable during scroll)
    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white background-paths-svg"
                viewBox="0 0 696 316"
                fill="none"
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                aria-hidden="true"
            >
                <title>Background Paths</title>
                {paths.map((path, i) => (
                    <path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        vectorEffect="non-scaling-stroke"
                        className={`bg-path bg-path-${i % 6}`}
                        style={{
                            willChange: 'opacity, transform',
                            animationDuration: `${18 + (i % 6)}s`,
                            animationDelay: `${(i % 6) * 0.6}s`,
                        }}
                    />
                ))}
            </svg>
        </div>
    )
})


