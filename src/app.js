function app() {
  // Parent
  const container = document.createElement("div");
  container.id = "app";

  /*
   *  Bon a savoir ;)
   */

  // Créer un "element" var element = createElement([nom de la balise])
  const hello = document.createElement("h1");

  // Lui ajouter une class element.classList.add([nom de la class])
  hello.classList.add("title");

  // Modifier les contenu de l'"element" element.innerHtml = "[chaine de caractère]"
  hello.innerHTML = "Hello world !";

  // Afficher l'"element" en l'ajoutant dans dans le "container"
  container.appendChild(hello);

  /*
   *  Ton code va ici ---
   */

  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.innerHTML = "Exercice : Todo List";

  const paragraphe = document.createElement("p");
  paragraphe.innerHTML = "lorem ipsum dolor sit amet";

  card.appendChild(title);
  card.appendChild(paragraphe);

  container.appendChild(card);

  /*
   * --------------------
   */

  return container;
}

export default app;
