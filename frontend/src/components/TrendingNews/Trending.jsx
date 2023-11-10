import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Researchers warn we could run out of data to train AI by 2026.',
      url: 'https://theconversation.com/researchers-warn-we-could-run-out-of-data-to-train-ai-by-2026-what-then-216741?utm_source=twitter&utm_medium=bylinetwitterbutton',
    },
    {
      headline: "OpenAI's ChatGPT and API faced severe outages due to DDoS Attack",
      url: 'https://mashable.com/article/chatgpt-down-major-outage-ddos-attack',
    },
    {
      headline: 'Due to power-hungry Bing AI, Microsoft is renting GPU power from Oracle',
      url: 'https://www.theregister.com/2023/11/07/bing_gpu_oracle/',
    },
    {
      headline:
        "Samsung’s Galaxy S24 to have on-device generative AI called Samsung Gauss",
      url: 'https://www.theverge.com/2023/11/8/23951930/samsung-galaxy-s24-generative-ai-model-samsung-gauss',
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
