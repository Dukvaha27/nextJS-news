import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { NewsType } from "../../types/newsType";

interface NProps {
  data: {
    news: NewsType[];
  };
  locale: string;
}

const News = ({ data, locale }: NProps) => {
  const router = useRouter();
  let news;

  if (locale === "en") {
    news = data.news[0];
  } else {
    news = data.news.find(
      (item: NewsType) => item.id === Number(router.query.id)
    );
  }

  return (
    <>
      <main className="mt-10">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {news!.title}
          </div>
        </div>
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <img
            src={news!.image || news!.image_big}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            alt=""
          />
        </div>
      </main>
    </>
  );
};

export default News;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const { locale } = context;
  let response;
  if (locale === "en") {
    response = await fetch(`https://news.itmo.ru/api/news/news/?id=${id}`);
  } else {
    response = await fetch(
      `https://news.itmo.ru/api/news/list/?ver=2.0&language_id=1&lead=1&per_page=9`
    );
  }
  const data = await response.json();
  return {
    props: { data, locale },
  };
}
