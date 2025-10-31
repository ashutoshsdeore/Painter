import StickyButtons from "./components/StickyButtons";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <link
  href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;700&family=Roboto:wght@400;700&family=Roboto+Slab:wght@400;700&family=Lora:wght@400;700&family=Montserrat:wght@400;700&family=Raleway:wght@400;700&family=Nunito:wght@400;700&family=Merriweather:wght@400;700&family=Josefin+Sans:wght@400;700&family=Kristi&family=Karla:wght@400;700&display=swap"
  rel="stylesheet"
/>

        {children}
        <StickyButtons />
      </body>
    </html>
  );
}
