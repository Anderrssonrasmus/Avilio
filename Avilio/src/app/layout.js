import "./globals.scss";

export const metadata = {
  title: "Avilio Creative"
};


import Header from "./components/header/header";
import Dots from "./components/dots/dots";



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Dots />
        <Header />
        {children}
      </body>
    </html>
  );
}
