import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { NewsType } from "../../types/newsType";
import ReactHtmlParser from "react-html-parser";

interface NProps {
  data: {
    news: NewsType[];
  };
}

const News = ({ data }: NProps) => {
  const router = useRouter();

  const news = data.news.find(
    (item: NewsType) => item.id === Number(router.query.id)
  );

  const date = news!.date.split(" ")[0];
  const time = news!.date.split(" ")[1];
  const text = ReactHtmlParser(news!.lead);

  return (
    <>
      <main className="mt-10">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {news!.title}
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <span className="pb-6">{text}</span>
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
                <p className="font-semibold text-gray-200 text-sm">{date}</p>
                <p className="font-semibold text-gray-400 text-xs">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale } = context;
  const language_id = locale === "en" ? 2 : 1;

  const API = `https://news.itmo.ru/api/news/list/?ver=2.0&language_id=${language_id}&lead=1&per_page=9`;
  const response = await fetch(API);
  const data = await response.json();

  return {
    props: { data },
  };
}
