import { dataCount } from "./data";
import Count from "./count";

export default function CompanyQty() {
  return (
    <div className="flex p-6 justify-center gap-12 flex-wrap">
      {dataCount.map((item, idx) => {
        return (
          <Count key={idx} end={item.end} span={item.span} title={item.title}/>
        )
      })}
    </div>
  )
}