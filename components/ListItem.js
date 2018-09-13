import Link from "next/link";
import Tag from "./Tag";

const ListItem = ({ imageUrl, showUrl, subtitle, tags, title, url }) => (
  <Link href={url} key={url}>
    <a target={showUrl ? "_blank" : "_self"}>
      <div>
        <div className="answer-title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        {tags ? (
          <div className="tags">
            {tags.map(tag => {
              return <Tag key={tag} tag={tag} />;
            })}
          </div>
        ) : null}
        {showUrl ? <div className="url">{url}</div> : null}
      </div>
      <img className="answer-image" src={imageUrl} />

      <style jsx>{`
        a {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 10px 20px;
          text-decoration: none;
        }

        a:hover {
          background: #eee;
        }

        .answer-title {
          color: rgba(0, 0, 0, 0.84);
          font-size: 24px;
          font-weight: 600;
        }

        .subtitle {
          color: rgba(0, 0, 0, 0.54);
          font-size: 16px;
          margin-top: 2px;
        }

        .tags {
          margin-top: 12px;
        }

        .url {
          color: #689f38;
          font-size: 16px;
          margin-top: 15px;
        }

        .answer-image {
          margin-left: 20px;
          max-height: 110px;
        }
      `}</style>
    </a>
  </Link>
);

export default ListItem;
