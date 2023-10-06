import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'SoftBank CEO predicts AI surpassing human intelligence in a decade',
      url: 'https://apnews.com/article/japan-softbank-masayoshi-son-ai-28e82a3b405dab8ca2a83d411e99847f',
    },
    {
      headline: 'Humane’s ‘Ai Pin’ debuts on the Paris runway',
      url: 'https://techcrunch.com/2023/09/30/humanes-ai-pin-debuts-on-the-paris-runway/?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axioslogin&stream=top',
    },
    {
      headline: 'Meta debuts new AI assistant and chatbots',
      url: 'https://www.axios.com/2023/09/27/meta-debuts-new-artificial-intelligence-chatbot?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axioslogin&stream=top',
    },
    {
      headline:
        'PMorgan CEO Jamie Dimon predicts that AI will shorten the workweek to three and a half days',
      url: 'https://www.businessinsider.in/tech/news/jpmorgan-ceo-jamie-dimon-says-our-children-will-probably-only-work-3-5-days-a-week-thanks-to-ai/articleshow/104137497.cms',
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
