"use client";

import { useRouter } from "next/navigation";
import useUserStore from "@/zustand/userStore";
import Link from "next/link";
import { UserRound, Home, LayoutList, SquarePen, Map } from "lucide-react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  requireLogin?: boolean;
}

function NavLink({ href, icon, label, requireLogin }: NavItemProps) {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const router = useRouter();

  const checkLogin = (e: React.MouseEvent) => {
    if (!isLoggedIn && requireLogin) {
      e.preventDefault();
      const params = new URLSearchParams({ redirect: href });
      router.push(`/login?${params.toString()}`);
    }
  };

  return (
    <Link
      href={href}
      onClick={checkLogin}
      className="flex flex-col items-center gap-2 text-white text-14 max-[500px]:text-12"
    >
      {icon}
      <span className="whitespace-nowrap">{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const navItems: NavItemProps[] = [
    { href: "/home", icon: <Home />, label: "홈" },
    { href: "/feed", icon: <LayoutList />, label: "여행후기" },
    { href: "/review", icon: <SquarePen />, label: "기록하기", requireLogin: true },
    { href: "/photomap", icon: <Map />, label: "지도생성", requireLogin: true },
    { href: "/mypage", icon: <UserRound />, label: "마이페이지", requireLogin: true },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] p-4 bg-travel-primary100 max-h-21 z-20">
      <div className="grid items-center grid-cols-5 gap-5 xs:gap-3 mx-auto w-fit">
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </div>
    </nav>
  );
}
