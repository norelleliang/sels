import { Company } from '@/components/company';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
