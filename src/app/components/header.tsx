import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
    return <header className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
            <Link href="/">LOGO</Link>
        </div>

        <div className="navbar-end">
            <div className="px-3">
                <Link href="/blog">Blog</Link>
            </div>
            <div className="px-3">Concept</div>
            <div className="px-3">Connexion</div>
        </div>
    </header>;
}
