import papasPizzeria from "./papas-pizzeria.jpg"

export default function() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "papas pizzeria";
  content.appendChild(heading);
  
  const image = document.createElement("img")
  image.src = papasPizzeria;
  
  content.appendChild(image)

  const headline = document.createElement("p");
  headline.textContent = "the restaurant (and game) where pizza is the goated food";
  content.appendChild(headline);

  const postHeadline = document.createElement("p");
  postHeadline.textContent = "here is a bunch of waffle for you to enjoy reading"
  content.appendChild(postHeadline);

  const waffle = document.createElement("p");
  waffle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam nemo voluptas cupiditate dolor eius, inventore soluta id earum. Sunt, a ab! Ex explicabo qui vero quo consectetur molestias doloribus facere eligendi itaque amet facilis mollitia ducimus laudantium unde omnis, voluptatem labore dicta, soluta aliquid! Veniam, earum voluptatum! Labore magnam inventore repudiandae dolorem iusto fuga natus a? Eos corporis harum provident impedit alias iste quo ratione delectus esse maiores, non quia quidem veritatis hic accusamus! Cum, perferendis ut commodi eos odit perspiciatis quas incidunt eum beatae similique. Ab officiis maxime impedit pariatur temporibus! Unde repudiandae incidunt mollitia dolores quidem cupiditate."
  content.appendChild(waffle);
}