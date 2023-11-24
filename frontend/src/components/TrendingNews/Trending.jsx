import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Microsoft releases Orca 2, a pair of small language models that outperform larger counterparts',
      url: 'https://venturebeat.com/ai/microsoft-releases-orca-2-a-pair-of-small-language-models-that-outperform-larger-counterparts/',
    },
    {
      headline: 'OpenAI having "intense discussions" amid 95% of employees are threatening to leave',
      url: 'https://www.benzinga.com/news/23/11/35890083/we-have-a-plan-leaked-openai-memo-calls-for-unity-even-as-over-95-employees-want-sam-altman-back',
    },
    {
      headline: 'Discord is shutting down its AI chatbot Clyde over limited server access and inappropriate responses',
      url: 'https://timesofindia.indiatimes.com/gadgets-news/discord-is-shutting-down-the-clyde-ai-chatbot/articleshow/105295994.cms',
    },
    {
      headline:
        'Google’s next-generation ‘Gemini’ AI model is reportedly delayed',
      url: 'https://www.theverge.com/2023/11/16/23964937/googles-next-generation-gemini-ai-model-is-reportedly-delayed',
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
