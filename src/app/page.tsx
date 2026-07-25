import { Contact } from '@/components/contact';
import { Engineering } from '@/components/engineering';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { ScrollChoreographer } from '@/components/scroll-choreographer';
import { Statement } from '@/components/statement';
import { Vision } from '@/components/vision';

export default function HomePage() {
  return (
    <>
      <ScrollChoreographer />
      <Header />
      <main>
        <Hero />
        <Statement />
        <Products />
        <Engineering />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
