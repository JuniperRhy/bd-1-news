import { useEffect, useState } from "react";
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

export default function NewsFeed({ isBDClicked, changeFont }) {
  const [formattedArticles, setFormattedArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `https://starwarsblog.starwars.com/`;
      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const scrapedArticles = $("ul.news-articles>li>article");
        console.log(scrapedArticles);
        const newFormattedArticles = scrapedArticles.map((_index, article) => ({
          title: article.children?.[1]?.children?.[1]?.attribs?.title,
          link: article.children?.[1]?.children?.[1]?.attribs?.href,
          imageSrc:
            article.children?.[1]?.children?.[1]?.children?.[1]?.attribs?.[
              "data-original"
            ],
          tagLine:
            article.children?.[3]?.children?.[3]?.children?.[1]?.children?.[0]
              ?.data,
          byLineAuthor:
            article.children?.[3]?.children?.[5]?.children?.[1].children?.[1]
              ?.attribs?.title,
          byLineDate:
            article.children?.[3]?.children?.[5]?.children?.[3].children?.[1]
              ?.data,
        }));
        setFormattedArticles([...newFormattedArticles]);
      } catch (e) {
        console.error(`Error while fetching   - ${e.message}`);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("sanity", formattedArticles);
  }, [formattedArticles]);

  console.log(formattedArticles);

  return (
    <div className={isBDClicked ? "NewsFeedVisible" : "NewsFeedInvisible"}>
      <div className={isBDClicked ? "NewsFeedOn" : "NewsFeedOff"}>
        <ul>
          {formattedArticles
            .filter((formattedArticle) => formattedArticle.title !== undefined)
            .map((formattedArticle, index) => (
              <li key={index}>
                <a
                  href={formattedArticle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={formattedArticle.imageSrc}
                    alt={formattedArticle.title}
                  />
                </a>
                <h1
                  style={{
                    webkitTextStrokeColor: changeFont
                      ? "transparent"
                      : "rgb(219, 190, 24)",
                    lineHeight: changeFont ? "" : "1.15em",
                  }}
                >
                  <a
                    href={formattedArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formattedArticle.title.replace("#", "")}
                  </a>
                </h1>
                <p>{formattedArticle.tagLine}</p>
                <p>
                  <small>
                    {formattedArticle.byLineAuthor.replace(
                      "Posts by",
                      "article by"
                    )}
                    <br />
                    {formattedArticle.byLineDate}
                  </small>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
