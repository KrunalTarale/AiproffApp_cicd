import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Top LLM models scores "unimpressively" in AI transparency, according to a new Stanford report',
      url: 'https://arstechnica.com/information-technology/2023/10/stanford-researchers-challenge-openai-others-on-ai-transparency-in-new-report/',
    },
    {
      headline: 'Foxconn and NVIDIA are building AI Factories to power up the production of AI self-driving cars',
      url: 'https://techcrunch.com/2023/10/17/foxconn-and-nvidia-are-building-ai-factories-to-accelerate-self-driving-cars/',
    },
    {
      headline: 'Apple to invest $1 Billion per year to integrate AI in its products',
      url: 'https://www.bloomberg.com/news/newsletters/2023-10-22/what-is-apple-doing-in-ai-revamping-siri-search-apple-music-and-other-apps-lo1ffr7p',
    },
    {
      headline:
        "66% of Indian CEOs find Gen AI top investment priority, 77% see it as double edged sword, says KPMG's latest report",
      url: 'https://www.livemint.com/news/india/66-of-ceos-in-india-gen-artificial-intelligence-top-investment-priority-77-see-it-as-double-edged-sword-says-report-11698162201716.html',
    },
  ];

  return (
    <div className="lg:py-3 flex justify-between border-b-2 overflow-x-auto max-h-24">
      <div className="px-2 flex flex-col items-center justify-center lg:w-1/10">
        <span className="font-bold">Trending</span>
        <span className="font-bold">News</span>
      </div>

      <div className="flex lg:w-9/10 ">
        {trendingNews.map((newsItem, index) => (
          <div
            className="flex items-center min-w-[65%] sm:min-w-[50%] min-[760px]:min-w-[45%] lg:min-w-[25%] pr-2 lg:w-1/4"
            key={index}
          >
            <span className="font-bold text-2xl md:text-3xl text-blue-500 mr-2">
              {index + 1}
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl ">|</span>
            <Link
              to={newsItem.url}
              className="hover:underline hover:text-blue-500 ml-2"
              target='_blank'
            >
              <span className="">{newsItem.headline}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
