import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__background}>
        <Image
          src="/index_lines.svg"
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Button>깃허브 로그인하기</Button>
      </div>
      <div className={styles.main__body}>
        <div className={styles.main__title}>
          <span className={styles.main__title__year}>
            <Image
              src="/index_title.svg"
              alt="title"
              width={265}
              height={0}
              style={{ height: "auto" }}
            />
            <Image
              src="/index_0line.svg"
              alt="line"
              width={43}
              height={0}
              style={{
                height: "auto",
                position: "absolute",
                top: "20px",
                left: "80px",
              }}
            />
          </span>
          <p>엠비티아이</p>
        </div>
        <Image
          src="/index_character.svg"
          alt="character"
          width={150}
          height={175}
        />
      </div>
    </main>
  );
}
