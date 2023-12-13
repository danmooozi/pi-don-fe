"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Button from "@/components/Button";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.main__background}>
        <span>
          <Image
            src="/index_lines.svg"
            alt="background"
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: "auto", height: "100%" }}
            priority
          />
          <div className={styles.main__title}>
            <span className={styles.main__title__year}>
              <Image
                src="/index_title.svg"
                alt="title"
                width={265}
                height={170}
              />
              <Image
                src="/index_0line.svg"
                alt="line"
                width={43}
                height={49}
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "80px",
                }}
              />
            </span>
            <p>엠비티아이</p>
            <Image
              src="/index_character.png"
              alt="character"
              width={150}
              height={175}
            />
          </div>
        </span>
        <Button className={styles.main__button} onClick={() => signIn("github")}>깃허브 로그인하기</Button>
      </div>
    </main>
  );
}
