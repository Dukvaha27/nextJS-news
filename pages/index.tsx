import { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { NewsType } from "../types/newsType";

interface IProps {
  data: {
    news: NewsType[];
  };
}
const Index = ({ data }: IProps) => {
  return (
    <>
      <Head>
        <title>Next.js | News site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container w-4/5 mx-auto">
        <h2 className="font-bold text-2xl mt-5">Новости и события</h2>
        <div className="flex flex-wrap justify-between items-start">
          {data.news.map((news) => {
            const date = new Date(news.date.split(" ")[0]).toDateString();
            return (
              <div
                key={news.id}
                className="my-5 w-full md:w-72 justify-center shadow-md rounded-lg flex "
              >
                <Link href={`/news/${news.id}`}>
                  <a>
                    <img
                      src={news.image_small}
                      alt="img"
                      className="w-full h-auto object-cover rounded-t-lg"
                    />
                    <div className="md:h-48 w-full p-4 justify-start flex flex-col">
                      <h6 className="border-b-2 text-1xl">{date}</h6>
                      <p className="my-4 items-center">{news.title}</p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.locale === "en" ? 2 : 1;

  const URL: string = `https://news.itmo.ru/api/news/list/?ver=2.0&language_id=${id}&lead=1&per_page=9`;

  const response = await fetch(URL);
  const data = await response.json();

  return {
    props: { data },
  };
};
