"use client";

import { audioPrefixAtom } from "@/app/lib/jotai";
import ButtonChoose from "@/app/utils/ButtonChoose";
import { useAtom } from "jotai";
import Link from "next/link";

export default function RetroButton({className, variant = 'normal', disabled = false, href="#", children}: {className?: string, href?: string, variant?: "normal" | "primary"| "success" | "warning" | "error", disabled?: boolean, children?: React.ReactNode}) {
    const variantClass = variant ? `is-${variant}` : "";
    const disabledClass = disabled ? "is-disabled" : "";
    const [audioPrefix, setAudioPrefix] = useAtom(audioPrefixAtom);
    return (
        <Link href={href}>
            <button type="button" onClick={() => {audioPrefix ? ButtonChoose() : null }} className={`${className} nes-btn ${variantClass} ${disabledClass}`}>{children}</button>
        </Link>
    )
}