// domain.com/news

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/link1">Link 1</Link>
        </li>
        <li>
          <Link href="/news/link2">Link 2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
