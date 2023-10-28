import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Boston Dynamics uses ChatGPT for a robot tour guide',
      url: 'https://gizmodo.com/boston-dynamics-robot-dog-uses-chatgpt-1850963851',
    },
    {
      headline: 'Shutterstock launches AI image editor for 750-million picture library.',
      url: 'https://venturebeat.com/ai/shutterstock-debuts-an-ai-image-editor-for-its-750-million-picture-library/',
    },
    {
      headline: 'Amazon unveils new AI product image generator',
      url: 'https://www.aboutamazon.com/news/innovation-at-amazon/amazon-ads-ai-powered-image-generator',
    },
    {
      headline:
        "Indian tech experts join new UN AI advisory body",
      url: 'https://www.google.com/amp/s/www.thehindu.com/sci-tech/technology/eminent-technology-experts-from-india-named-to-new-ai-advisory-body-announced-by-un-secretary-general/article67464818.ece/amp/',
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
