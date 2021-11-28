
const Loading = () => {
  const preload = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="container w-4/5 mx-auto">
      <div className="flex flex-wrap justify-between items-start">
        {preload.map((item) => (
          <div
            key={item}
            className="h-50 from-purple-500 to-indigo-500 flex items-center justify-center"
          >
            <div className="bg-white p-4 rounded-md">
              <div className="w-64 h-44 bg-gray-200 animate-pulse" />
              <div className="mt-8 h-32 w-full space-y-3">
                <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
