import { useEffect, useState } from "react";
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
          {/* <li>
            <h1
              style={{
                webkitTextStrokeColor: changeFont
                  ? "transparent"
                  : "rgb(219, 190, 24)",
              }}
            >
              Star Wars News
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, non labore. Culpa ullam expedita, illo iusto suscipit
              ut molestiae recusandae cupiditate, magnam dolorem quis at quaerat
              et nulla fugit modi harum eos ex est, veniam animi sapiente
              numquam. Libero dolorum quisquam ut? Beatae porro officiis quae
              consequuntur laboriosam repellat voluptatibus!
            </p>
          </li>
          <br />
          <li>
            <h1
              style={{
                webkitTextStrokeColor: changeFont
                  ? "transparent"
                  : "rgb(219, 190, 24)",
              }}
            >
              Star Wars News
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              optio facere libero iusto quo itaque dicta doloremque quaerat
              deserunt unde. Corporis facere saepe praesentium debitis sit
              laudantium quae inventore cumque, eum facilis iusto delectus
              ipsum, ipsam quisquam provident accusantium architecto! Tempora
              harum odit possimus asperiores eligendi dignissimos distinctio
              perferendis? Quae, molestias non. Illo itaque iusto maxime dolorum
              temporibus blanditiis asperiores quia, excepturi laudantium, dolor
              quam omnis, dolorem vel quod voluptate velit veritatis similique
              maiores sequi ratione perferendis. Tempora, numquam architecto?
            </p>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

// console.log(response.data);

/*
      
      function filter<cheerio.Element, cheerio.Element>(this: cheerio.Cheerio<...>, match: (index: number, value: cheerio.Element) => value is cheerio.Element): cheerio.Cheerio<...> (+1 overload)

      Now we see why (h2) => h2 is a number

      (index, h2) => boom

      (method) Array<string>.filter<S>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): S[] (+1 overload)

      You can see in the standard filter the first parameter given to the callback is the value (the current element), then the index of it, then the whole array itself.



      */ // <--- won't do any normal filter stuff, will just run our custom function and print 'I do what I want...'
