import Link from "next/link";
import LeadersInfo from "./leader-info";
import LeadersImg from "./leadersImg";

export default function Leaders() {
  return (
    <div className="flex justify-center">
      <div className="w-[100%] max-w-[600px] bg-white text-black flex flex-col gap-12 py-12 mx-6">
        <p className="text-center">Meet the high-tech leaders that are inspiring a new generation of ASUS innovation. Their wisdom, experience and passion continue to cultivate a corporate culture where the incredible is possible.
        </p>
        <div className="bg-[#f1f1f1]">
          <LeadersImg src="https://press.asus.com/assets/w_600,h_732/e2a42855-272e-4c46-bb29-54317560dc64/JonneyShih.4f3a6c1-p-800.jpg" name="Jonney Shih" position="CHAIRMAN" />
          <LeadersInfo>
            <div className="mb-2">
              Jonney Shih has served as the Chairman of ASUS since 1993, and until 2007 he also served as the Chief Executive Officer.
            </div>
            <div>
              As Chairman, Mr. Shih guides the company's vision, corporate culture, and innovation strategies. Under his leadership, ASUS has become an internationally recognized technology leader that ranks No. 1 in worldwide sales of motherboards and No.3 in consumer notebooks. For the last several years, Fortune magazine has named ASUS as one of the World's Most Admired Companies. Since 2013, ASUS has also been recognized as the most valuable international brand from Taiwan for five consecutive years, according to Interbrand.
            </div>
          </LeadersInfo>
        </div>
        <div className="bg-[#f1f1f1]">
          <LeadersImg src="https://press.asus.com/assets/w_600,h_732/fd9ac1ca-f6cd-44d6-a55a-0facd3ced03f/6538f11c65d88cb2518bc11b_TedHsu.ae73875-p-500.jpg" name="Ted Hsu" position="VICE CHAIRMAN" />
          <LeadersInfo>
            <div className="mb-2">
              Ted Hsu is one of the original founders of ASUS and is currently serving as the Vice Chairman. Previously, he served as the Chief Strategy Officer of ASUS from 2016 to 2018.
            </div>
            <div>
              Since the earliest years of his career, Mr. Hsu has been engaged in making significant, industry-shifting discoveries that have helped shape the IT landscape in Taiwan. Today, he utilizes his experience, wisdom and passion for technology in his new role as Vice Chairman to help realize the ASUS vision of becoming one of the world's most admired technology companies.
            </div>
          </LeadersInfo>
        </div>
        <div className="bg-[#f1f1f1]">
          <LeadersImg src="https://press.asus.com/assets/w_600,h_732/88196188-31ca-4c67-9470-5df7ca588630/6538f11cd0812e0abd2c0fdb_JonathanTsang.92ecdee-p-500.jpg" name="Jonthan Tsang" position="PRESIDENT, ASUS GROUP" />
          <LeadersInfo>
            <div className="mb-2">
              Jonathan Tsang is President of the ASUS Group. From 2008 to 2018 he also served as Vice Chairman.
            </div>
            <div>
              Since joining ASUS in 1998, Mr. Tsang has guided international business strategies and corporate culture across the organization. Prior to 2008, he oversaw global sales, marketing, product management and customer service for ASUS. In his various roles, he has helped develop essential business principles to establish the highest standards for business practices and product quality, with the aim of winning the hearts of customers everywhere. Under his leadership, ASUS has expanded its international presence with hundreds of localized sales and service points around the world.
            </div>
          </LeadersInfo>
        </div>
        <div className="bg-[#f1f1f1]">
          <LeadersImg src="https://press.asus.com/assets/w_600,h_732/d1dee204-d8ad-4b5c-9d6c-1dc13b5ef488/6538f11c03c85b16bf23eab3_SY.f3f121c-p-500.jpg" name="S.Y. Hsu" position="CO-CEO" />
          <LeadersInfo>
            <div className="mb-2">
              S.Y. Hsu drives technical strategy and R&D management, working in collaboration with co-CEO Samson Hu. His extensive technical expertise is inspiring a new generation of smart technology at ASUS.
            </div>
            <div>
              Mr. Hsu joined ASUS in 1993 as Senior Manager of the Motherboard Business Unit before serving as Vice President of the Eee Systems Business Unit, VP of the NoteBook Business Unit, COO, and VP of the Personal Computer Business Unit.
            </div>
          </LeadersInfo>
        </div>
        <div className="bg-[#f1f1f1]">
          <LeadersImg src="https://press.asus.com/assets/w_600,h_732/f8f0161a-4050-4367-8532-9ea554ddea0a/6538f11cac3b56ea156650f5_SamsonHu.ab1dff7-p-500.jpg" name="Samson Hu" position="CO-CEO" />
          <LeadersInfo>
            <div className="mb-2">
              Samson Hu drives product strategy and corporate operations for ASUS, working in collaboration with co-CEO S.Y. Hsu. His operations expertise, remarkable business insights and strategic long-term vision are leading the way to more efficient products and processes.
            </div>
            <div>
              Mr. Hu began his ASUS career as Assistant Vice President of the Motherboard ODM Business Unit before serving as VP of the Eee System Business Unit, VP of the Tablet Business Unit, VP of Mobile Communication Products, and COO. Prior to becoming co-CEO he served as VP of Global Customer Service and General Manager of the Personal Computer Business Unit.
            </div>
          </LeadersInfo>
        </div>
        <Link href={'/about-us'} className="bg-[#f1f1f1] py-2 px-6 rounded-md self-start font-semibold">MORE ABOUT US</Link>
      </div>
    </div>
  )
}