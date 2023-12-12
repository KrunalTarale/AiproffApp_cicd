import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        'Cruise faces potential fines for not fully disclosing an accident where its robotaxi dragged a pedestrian, undermining trust and regulatory compliance ’',
      url: 'https://techcrunch.com/2023/12/04/cruise-faces-fines-in-california-for-withholding-key-details-in-robotaxi-accident/?guccounter=1',
    },
    {
      headline: 'IBM and Meta join forces in AI Alliance, a new group of over 50 organizations that support open source AI development and innovation.',
      url: 'https://newsroom.ibm.com/AI-Alliance-Launches-as-an-International-Community-of-Leading-Technology-Developers,-Researchers,-and-Adopters-Collaborating-Together-to-Advance-Open,-Safe,-Responsible-AI',
    },
    {
      headline: "Amazon's AI chatbot Q reportedly suffering 'severe hallucinations' and 'leaking confidential data'",
      url: 'https://www.businessinsider.com/amazon-ai-chatbot-q-hallucinations-2023-12?IR=T',
    },
    {
      headline: 'Google launches Gemini, its long-awaited answer to ChatGPT',
      url: 'https://www.wired.com/story/google-gemini-ai-model-chatgpt/',
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
