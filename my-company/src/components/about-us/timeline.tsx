export default function Timeline() {
  return (
    <div className="mx-6">
      <h1 className="text-center text-2xl md:text-4xl mt-12 md:my-12">Timeline</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mb-12">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 hover:text-red-500 cursor-pointer transition ease-linear duration-200">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="text-red-500 font-mono italic">2006</time>
            <div className="text-lg font-black">Founding of ROG</div>
            Asus launched the Republic of Gamers (ROG) sub-brand to cater to the high-end gaming market, introducing products designed specifically for gamers.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 hover:text-red-500 cursor-pointer transition ease-linear duration-200">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="text-red-500 font-mono italic">2008</time>
            <div className="text-lg font-black">Launch of ROG Motherboards</div>
            The first ROG motherboards were introduced, which set a new standard for performance and customization in the gaming community.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 hover:text-red-500 cursor-pointer transition ease-linear duration-200">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="text-red-500 font-mono italic">2011</time>
            <div className="text-lg font-black">Introduction of ROG Laptops</div>
            ROG introduced high-performance gaming laptops, such as the G-series, which provided powerful hardware for on-the-go gaming.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 hover:text-red-500 cursor-pointer transition ease-linear duration-200">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="text-red-500 font-mono italic">2016</time>
            <div className="text-lg font-black">ROG Swift PG348Q</div>
            Asus released the ROG Swift PG348Q, a gaming monitor that won the CES Innovation Award, featuring a 34-inch curved ultra-wide QHD display.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 hover:text-red-500 cursor-pointer transition ease-linear duration-200">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="text-red-500 font-mono italic">2018</time>
            <div className="text-lg font-black">ROG Phone</div>
            The ROG Phone was introduced as the first gaming smartphone, featuring innovative cooling systems and gaming-oriented features.
          </div>
        </li>
      </ul>
    </div>
  )
}
