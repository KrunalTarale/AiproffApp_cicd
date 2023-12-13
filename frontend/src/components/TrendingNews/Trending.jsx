import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Nvidia emerges as the leading investor in AI companies  ’',
      url: 'https://dealroom.co/uploaded/2023/11/Dealroom-Global-tech-vc-startup-Nov-2023.pdf?x92057',
    },
    {
      headline: "Scientists created an AI system using living brain cells that can identify different people's voices with 78% accuracy.",
      url: 'https://www.nature.com/articles/d41586-023-03975-7',
    },
    {
      headline: "Microsoft and labour unions form ‘historic’ alliance on AI'",
      url: 'https://www.bloomberg.com/news/articles/2023-12-11/microsoft-and-labor-unions-form-historic-alliance-on-ai',
    },
    {
      headline: 'Meta unveils Audiobox, an AI that clones voices and generates ambient sounds',
      url: 'https://audiobox.metademolab.com/',
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
