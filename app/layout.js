// app/layout.js or app/layout.tsx
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

// Load GeistSans local font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Load GeistMono local font
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Outfit Google font
const outfit = Outfit({
  subsets: ["latin"], // Include subsets, adjust if you need additional language support
  variable: "--font-outfit",
  display: "swap", // Use 'swap' for faster font rendering
});

export const metadata = {
  title: "CEIN.",
  description: "Elevate Your Style Timeless Fashion, Sustanable Choices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <CartProvider>
        <WishlistProvider>
              <Navbar />
              {children}
        </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
