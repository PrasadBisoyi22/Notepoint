import { useEffect, useState } from "react";
import heroImg from "../assets/hero.jpg";

const words = [
  "Learn Web Development",
  "Master Interview Preparation",
  "Build Strong Fundamentals"
];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to NotePoint 👋</h1>
        <h2 className="typing">{text}</h2>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Learning Illustration" />
      </div>
    </section>
  );
}

export default Hero;
