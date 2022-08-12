import { GetStaticProps } from "next";

type Episode = {
  episodes: Array<{
    id: string;
    title: string;
    members: string;
    published_at: string;
    thumbnail: string;
    descriptipn: string;
    file: {
      url: string;
      type: string;
      duration: string;
    };
  }>;
};

interface Episodes {
  episodes: Episode[];
}

export default function Home(episodes: Episodes) {
  console.log(episodes);

  return <div>{JSON.stringify(episodes)}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc"
  );
  const data = await response.json();

  const episodes = data.map((episode: Episode) => {
    return {
      ...episode,
    };
  });

  console.log(episodes);

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
