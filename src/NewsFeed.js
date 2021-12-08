export default function NewsFeed({ isBDClicked, changeFont }) {
  return (
    <div className={isBDClicked ? "NewsFeedVisible" : "NewsFeedInvisible"}>
      <div className={isBDClicked ? "NewsFeedOn" : "NewsFeedOff"}>
        <ul>
          <li>
            <h1
              style={{
                webkitTextStrokeColor: changeFont
                  ? "transparent"
                  : "rgb(219, 190, 24)",
                color: changeFont ? "rgb(134, 116, 14)" : "rgb(66, 66, 66)",
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
                color: changeFont ? "rgb(134, 116, 14)" : "rgb(66, 66, 66)",
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
          </li>
        </ul>
      </div>
    </div>
  );
}
