import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'ThinkDiffusionXL: A Groundbreaking Free A.I. Art Model',
      url: 'https://www.bignewsnetwork.com/news/274030564/thinkdiffusionxl-a-groundbreaking-free-ai-art-model-for-the-open-source-community',
    },
    {
      headline: "Biden AI executive order ‘certainly challenging’ for open-source AI ",
      url: 'https://cointelegraph.com/news/biden-ai-executive-order-certainly-challenging-open-source-ai-industry-insiders',
    },
    {
      headline: 'Abu Dhabi’s Core42 sets new benchmark for Arabic LLM with Jais 30B',
      url: 'https://gulfbusiness.com/core42-sets-new-benchmark-with-jais-30b/',
    },
    {
      headline:
        "Chinese AI unicorn’s 34B LLM outperforms larger Llama 2 and Falcon models",
      url: 'https://venturebeat.com/ai/chinese-ai-unicorns-34b-llm-outperforms-larger-llama-2-and-falcon-models/',
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
