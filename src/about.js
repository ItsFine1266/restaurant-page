import about from "./about.jpg"

export default function() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "about";
  content.appendChild(heading);

  const image = document.createElement("img");
  image.src = about;
  content.appendChild(image)

  const aboutInfo = document.createElement("p");
  aboutInfo.textContent = "open from 6am to 7pm";
  content.appendChild(aboutInfo);

  const waffle = document.createElement("p");
  waffle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam nemo voluptas cupiditate dolor eius, inventore soluta id earum. Sunt, a ab! Ex explicabo qui vero quo consectetur molestias doloribus facere eligendi itaque amet facilis mollitia ducimus laudantium unde omnis, voluptatem labore dicta, soluta aliquid! Veniam, earum voluptatum! Labore magnam inventore repudiandae dolorem iusto fuga natus a? Eos corporis harum provident impedit alias iste quo ratione delectus esse maiores, non quia quidem veritatis hic accusamus! Cum, perferendis ut commodi eos odit perspiciatis quas incidunt eum beatae similique. Ab officiis maxime impedit pariatur temporibus! Unde repudiandae incidunt mollitia dolores quidem cupiditate.";
  content.appendChild(waffle);
}