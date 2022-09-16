import "./NavItems.module.css";

export default function NavItems({ ulClass, liClass }) {
  return (
    <div>
      <ul className={ulClass}>
        <li className={liClass}>
          {" "}
          <a href="/">My Projects</a>
        </li>

        <li className={liClass}>
          <a href="/">About me</a>
        </li>

        <li className={liClass}>
          <a href="/">Qualifications</a>
        </li>

        <li className={liClass}>
          <a
            href="https://github.com/Knikkey"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </li>

        <li className={liClass}>
          <a href="/">Contact me</a>
        </li>
      </ul>
    </div>
  );
}
