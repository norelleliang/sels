import { Company } from '@/components/company';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { Stats } from '@/components/stats';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
