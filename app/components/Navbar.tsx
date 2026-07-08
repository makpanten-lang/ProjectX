"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
    name: string;
    email: string;
    role: "admin" | "user";
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            setUser(data.user);
        }

        loadUser();
    }, []);

    async function logout() {
        await fetch("/api/auth/logout", {
            method: "POST",
        });

        setUser(null);
        router.push("/login");
        router.refresh();
    }


    return (
        <nav className="navbar">
            <div className="nav-container">

                <Link href="/" className="logo">
                  𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐗†
                </Link>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ✟
                </button>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <Link href="/" >𝐇𝐨𝐦𝐞 ✟</Link>
                    </li>

                    <li>
                        <Link href="/about">𝐀𝐛𝐨𝐮𝐭 ✟</Link>
                    </li>
                    <li>
                        <Link href="/contact">𝐂𝐨𝐧𝐭𝐚𝐜𝐭 ✟</Link>
                    </li>

                    {user && (
                        <li>
                            <Link href="/dashboard">𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝 ✟</Link>
                        </li>
                    )}

                    {user?.role === "admin" && (
                        <li>
                            <Link href="/admin/users">𝐀𝐝𝐦𝐢𝐧 ✟</Link>
                        </li>
                    )}

                    {!user ? (
                        <>
                            <li>
                                <Link href="/login">𝐋𝐨𝐠𝐢𝐧  ✟ </Link>
                            </li>
                            <li>
                                <Link href="/register"> 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫  ✟ </Link>
                            </li>
                            <li>
                                <Link href="/"> 𝐋𝐨𝐠𝐨𝐮𝐭 ✟</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/profile"> {user.name} ({user.role}) </Link>
                            </li>
                            <li>
                                <button onClick={logout}>
                                    𝐋𝐨𝐠𝐨𝐮𝐭 ✟
                                </button>
                            </li>
                        </>
                    )}


                </ul>
            </div>
        </nav>
    );
}