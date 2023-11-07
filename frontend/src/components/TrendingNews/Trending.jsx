import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Elon Musk releases new AI chatbot ‘Grok’ in bid to take on ChatGPT',
      url: 'https://www.ft.com/content/093cda92-91d8-49ff-8475-4f66ccff137b',
    },
    {
      headline: 'OpenAI is reportedly set to debut a new interface for ChatGPT, and third parties tools to build custom GPT-4 chatbots.',
      url: 'https://venturebeat.com/ai/alleged-openai-devday-leak-suggests-connections-to-cloud-drives-custom-chatbot-builder/',
    },
    {
      headline: 'Stability AI has launched Stable 3D, an AI app for creating 3D models quickly and affordably ',
      url: 'https://techcrunch.com/2023/11/02/stability-ais-latest-tool-uses-ai-to-generate-3d-models/',
    },
    {
      headline:
        "UK to create one of world’s most powerful AI supercomputers",
      url: 'https://thenextweb.com/news/uk-ai-supercomputer-summit',
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
