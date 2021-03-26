import React from "react";
import avator from "../assets/img/profile.jpg";
import icons from "../icons/icons";
import Services from "../components/Services";
import About from "../components/About";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";

export default function Main({ isSideBarOpen, clientWidth }) {
  const skills = [
    {
      skill: "HTML/CSS",
      score: 95,
    },

    {
      skill: "JavaScript",
      score: 42,
    },
    {
      skill: "Bootstrap",
      score: 95,
    },
    {
      skill: "C Programming",
      score: 5,
    },

    {
      skill: "React JS",
      score: "56",
    },
  ];
  React.useEffect(() => {
    window.addEventListener("DOMContententLoaded", init());
    return () => {};
  }, []);
  class TypeWritterEffect {
    constructor(txtElement, cursorElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.cursorElement = cursorElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
    type() {
      let current = this.wordIndex % this.words.length;
      // get full text of current word
      let fullText = this.words[current];
      //make a pause at the end
      //check if deleting
      this.isDeleting
        ? (this.txt = String(fullText).substring(
            0,
            (Array.from(this.txt).length -= 1)
          ))
        : (this.txt = String(fullText).substring(
            0,
            (Array.from(this.txt).length += 1)
          ));
      // inset text into element
      this.txtElement.textContent = this.txt;

      //init typeSpeed
      let typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 3;
      }

      //next word
      if (!this.isDeleting && this.txt === fullText) {
        // current index of word
        typeSpeed = this.wait;
        //blink cursor when done typing
        this.cursorElement.classList.add("blink");
        // set isDeleting to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        //move to next word
        //romove blink cursor when typing
        this.cursorElement.classList.remove("blink");
        //pause before typing new word
        typeSpeed = 200;
        this.wordIndex++;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  const init = () => {
    const txtElement = document.querySelector(
      '[data-name="type-writer-effect"]'
    );
    const cursorElement = document.querySelector('[data-role="cursor"');
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWritterEffect(txtElement, cursorElement, words, wait);
  };

  return (
    <>
      <Home isSideBarOpen={isSideBarOpen} icons={icons} />
      <About avator={avator} />
      <Resume skills={skills} />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  );
}
