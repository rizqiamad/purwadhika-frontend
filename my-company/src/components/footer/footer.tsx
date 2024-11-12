import FooterBgImg from "./footerBgImg";
import NavFooter from "./nav";
import Terms from "./terms";

export default function Footer() {
  return (
    <FooterBgImg>
      <div className="w-[90%] mx-auto">
        <NavFooter />
        <hr className="my-5" />
        <Terms />
      </div>
    </FooterBgImg>
  )
}