import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Biden Administration issues U.S.′ first AI executive order: Safety, Civil Rights, and Labor Impact',
      url: 'https://www.cnbc.com/2023/10/30/biden-unveils-us-governments-first-ever-ai-executive-order.html',
    },
    {
      headline: 'California suspends Cruise driverless vehicles in San Francisco',
      url: 'https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/',
    },
    {
      headline: 'Microsoft will lay off the team behind AI drone to focus on OpenAI',
      url: 'https://www.businessinsider.com/microsoft-shutters-project-airsim-ai-strategy-openai-2023-10?IR=T',
    },
    {
      headline:
        "How to use CuPy in Python to harness GPU power",
      url: 'https://www.kdnuggets.com/leveraging-the-power-of-gpus-with-cupy-in-python',
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
