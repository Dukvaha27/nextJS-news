import { NextPage } from "next";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import { NewsType } from "../../types/newsType";

interface NProps {
  data: {
    news: NewsType[];
  };
}

const News: NextPage<NProps> = ({ data }): JSX.Element => {
  const router = useRouter();
  const news = data.news.find(
    (item: NewsType) => item.id === Number(router.query.id)
  );

  return (
    <>
      <main className="mt-10">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {news!.title}
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <span className="pb-6">{ReactHtmlParser(news!.lead)}</span>
        </div>
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <img
            src={news!.image_big}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            alt=""
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
              {news!.parent_category.category_title}
            </a>
            <div className="flex mt-3">
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {news!.date.split(" ")[0]}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {" "}
                  {news!.date.split(" ")[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;

export async function getServerSideProps() {
  const response = await fetch(
    "https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9"
  );
  const data = await response.json();
  return {
    props: { data },
  };
}
