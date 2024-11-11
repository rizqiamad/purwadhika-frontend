import NavFooter from "./nav";
import Terms from "./terms";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-16 min-h-[80vh]"
      style={{ 
        backgroundImage: 'url(https://dlcdnwebimgs.asus.com/gain/07B097A3-E9C2-4AFF-9196-3ADE8F5BCEA1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-[90%] mx-auto">
        <NavFooter />
        <hr className="my-5" />
        <Terms />
      </div>
    </footer>
  )
}