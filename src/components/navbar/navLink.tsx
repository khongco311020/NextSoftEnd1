"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

interface NavLinkProps {
  path: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}

const NavLink = ({ path, title, children }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <div
      className={`${styles.linkContainer} ${
        pathName === path && styles.active
      } flex items-center`}
    >
      <Link href={path} className={styles.link}>
        {title}
      </Link>
      {children && <div className="ml-1">{children}</div>}
    </div>
  );
};

export default NavLink;
