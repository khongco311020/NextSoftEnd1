"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

interface NavLinkProps {
  path: string;
  title: string;
}

const NavLink = ({ path, title }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <div className={`${styles.linkContainer} ${isActive && styles.active}`}>
      <Link href={path} className={styles.link}>
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
