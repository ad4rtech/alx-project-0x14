import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
return (
<div>
<Header />
<main className="min-h-screen p-4">{children}</main>
<Footer />
</div>
);
}