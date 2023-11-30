import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Europe’s IT sector worried AI Act ‘misses mark on tech neutrality’',
      url: 'https://thenextweb.com/news/europes-it-sector-worried-ai-act-tech-neutrality',
    },
    {
      headline: 'Alibaba donates its quantum lab to a local university, shifts focus to AI in agriculture and healthcare.',
      url: 'https://www.scmp.com/tech/big-tech/article/3242956/alibaba-donates-its-quantum-lab-local-university-shifts-focus-ai-agriculture-healthcare',
    },
    {
      headline: "The Pentagon's new initiative, Replicator, aims to deploy thousands of AI-enabled autonomous vehicles by 2026",
      url: 'https://economictimes.indiatimes.com/tech/technology/pentagons-ai-initiatives-accelerate-hard-decisions-on-lethal-autonomous-weapons/articleshow/105507375.cms',
    },
    {
      headline:
        'Nvidia postpones the release of its China-compliant AI chip to next year amid U.S. export regulations',
      url: 'https://www.reuters.com/technology/nvidia-delays-launch-new-china-focused-ai-chip-sources-2023-11-24/',
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
