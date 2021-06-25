import { useRouter } from "next/router";

// domain.com/news/detail

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>{`The ${newsId} Page`}</h1>;
};

export default DetailPage;
