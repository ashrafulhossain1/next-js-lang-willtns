import Footer from './components/shared/_components/Footer';
import Navbar from './components/shared/_components/Navbar';
import './globals.css';
import Head from './head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Head></Head>
      <body>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-80px)]">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
