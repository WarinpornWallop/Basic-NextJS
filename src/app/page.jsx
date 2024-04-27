"use client"

import Image from 'next/image'
import Header from './components/Header'
import Nav from './components/Nav'
import styles from './styles/Button.module.css';
import styled from 'styled-components'
import './styles/main.scss'
import NextImage from "../../public/next.svg";
import background from '../../public/daisy.jpg';
import { useRouter } from "next/navigation";

const StyledComponent = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 20px;
  border-radius: 5px;
`;

export default function Home() {
  const router = useRouter();
  return (
    <main className="h-screen  p-24 bg-[url('../../public/download.jpg')] bg-cover">
      {/* <Header />
      <Nav /> */}
      {/* <button className={styles.button}>My Button</button>
      <StyledComponent>This is a styled component in NextJS</StyledComponent>
      <div className="card">This is styling with sass</div> */}
      <p className="text-8xl font-bold mt-32">Hello!!</p>
      <p className="text-8xl font-bold">I&apos;m Tonnamwarineiei</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => {
          router.push("/about");
        }}
      >
        More About me
      </button>
    </main>
  );
}
