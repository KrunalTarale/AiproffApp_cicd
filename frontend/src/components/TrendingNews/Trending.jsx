const Trending = () => {
  const trendingNews = [
    'The economic potential of generative AI: The next productivity frontier',
    'What’s the future of generative AI? An early view in 15 charts',
    'Yes, you can measure software developer productivity',
    'The state of AI in 2023: Generative AI’s breakout year',
  ];

  return (
    <div className="lg:py-3 flex justify-between border-b-2 overflow-x-auto max-h-24">
      <div className="p-4 flex flex-col items-center justify-center lg:w-1/10">
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
            <span className="text-2xl md:text-3xl lg:text-4xl">|</span>
            <span className="ml-1 md:ml-2">{newsItem}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
