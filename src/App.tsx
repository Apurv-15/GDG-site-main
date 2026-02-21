/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GDGNavbar from './components/GDGNavbar';
import GDGHero from './components/GDGHero';
import Web3Hero from './components/Web3Hero';

export default function App() {
  return (
    <main className="w-full">
      {/* Section 1: GDG (Light) */}
      <section className="relative w-full min-h-screen bg-[#F8F9FA]">
        <GDGNavbar />
        <GDGHero />
      </section>

      {/* Section 2: Web3 (Dark) */}
      <section className="relative w-full min-h-screen bg-black">
        <Web3Hero />
      </section>
    </main>
  );
}
