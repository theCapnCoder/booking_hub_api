import heartIcon from "../../assets/svg/heart.svg";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span className={style.text}>
        © 2024, from
        <a className={style.link} href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img className={style.icon} src={heartIcon} alt="heart" />
      </span>
    </footer>
  );
};

export default Footer;
