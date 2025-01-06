"use client";

export default function RetroButton({className, variant = 'normal', disabled = false, children}: {className?: string, variant?: "normal" | "primary"| "success" | "warning" | "error", disabled?: boolean, children?: React.ReactNode}) {
    const variantClass = variant ? `is-${variant}` : "";
    const disabledClass = disabled ? "is-disabled" : "";
    return (
        <button type="button" className={`${className} nes-btn ${variantClass} ${disabledClass}`}>{children}</button>
    )
}