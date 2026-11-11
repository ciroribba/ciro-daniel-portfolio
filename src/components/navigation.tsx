'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import type { Ui } from '@/i18n/ui';
import { Button } from '@/components/ui/button';
export function Navigation({
  copy,
  links,
  children,
}: {
  copy: Pick<Ui['shell'], 'open' | 'close' | 'navigation'>;
  links: readonly { href: string; label: string }[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) menu.current?.querySelector('a')?.focus();
  }, [open]);
  return (
    <>
      <nav
        ref={menu}
        id="main-navigation"
        aria-label={copy.navigation}
        className={`${open ? 'flex' : 'hidden'} nav-links lg:flex`}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        {links.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={
              pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '') ||
              (index !== 0 && pathname.startsWith(item.href))
                ? 'page'
                : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {children}
      <Button
        ref={toggle}
        className="lg:hidden"
        variant="ghost"
        size="icon"
        aria-label={open ? copy.close : copy.open}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X aria-hidden="true" size={19} />
        ) : (
          <Menu aria-hidden="true" size={19} />
        )}
      </Button>
    </>
  );
}
