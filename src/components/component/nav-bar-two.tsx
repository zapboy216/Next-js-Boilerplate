/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CahallyBNlD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
* */
import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

export function NavBarTwo() {
  return (
    <header className="flex flex-col items-start justify-between gap-2 border-b border-gray-200 py-4 md:flex-row md:items-center md:gap-4 md:py-6 dark:border-gray-800">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
        <Link className="ml-4 md:ml-0" href="#">
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <nav className="[& a]:underline flex flex-1 flex-col items-start justify-center gap-2 md:ml-4 md:flex-row md:items-center md:gap-0">
        <Link
          className="flex w-full items-center py-2 text-sm font-semibold"
          href="#"
        >
          Features
        </Link>
        <Link
          className="flex w-full items-center py-2 text-sm font-semibold"
          href="#"
        >
          Solutions
        </Link>
        <Link
          className="flex w-full items-center py-2 text-sm font-semibold"
          href="#"
        >
          Customers
        </Link>
        <Link
          className="flex w-full items-center py-2 text-sm font-semibold"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="flex w-full items-center py-2 text-sm font-semibold"
          href="#"
        >
          Blog
        </Link>
        <Link
          className="flex w-full items-center py-2 text-sm font-semibold"
          href="#"
        >
          Contact Us
        </Link>
      </nav>
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-2 md:mx-0 md:flex-row md:justify-end md:gap-4">
        <Link
          className="border-width-2 inline-flex size-9 translate-y-0.5 items-center justify-center rounded-full border border-gray-200 border-slate-200 text-sm font-medium transition-colors hover:border-gray-900 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900/50 dark:border-gray-800 dark:border-slate-800 dark:hover:border-gray-50 dark:hover:text-gray-50 dark:focus:ring-gray-800/50"
          href="#"
        >
          Sign in
        </Link>
        <Link
          className="transition-opacity-150 inline-flex size-9 translate-y-0.5 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-1 focus:ring-gray-900/50 dark:bg-gray-50 dark:text-gray-900 dark:hover:opacity-100 dark:focus:ring-gray-800/50"
          href="#"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
