import styles from "./styles.module.scss";

import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a href="">
          <img src="/logo.svg" alt="logo" />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}
