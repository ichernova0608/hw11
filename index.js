const item = document.getElementById("item");
const title = getBlog();
function append(parent, el) {
  return parent.appendChild(el);
}
async function getBlog() {
  let query = window.location.search;
  if (query === null) query === "?page=1";
  const response = await fetch(
    `https://gorest.co.in/public-api/posts${query}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer e8ce001308941f5be0d2322626ab2d35c0c6d4c5be747f3cae55f8165070c31c",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);

  const count = data.meta.pagination.total; //всего записей
  const cnt = 20; //сколько отображаем записей на странице
  const cnt_page = Math.ceil(count / cnt); //кол-во страниц

  data.data.forEach((element) => {
    renderList(element.title, element.id);
  });

  for (let i = 1; i < cnt_page; i++) {
    if (i === 1) {
      paginationPages(i, "index.html");
    }
  }
  for (let i = 2; i <= cnt_page; i++) {
    paginationPages(i, `index.html?page=${i}`);
  }
}
function renderList(text, href) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `article.html/${href}`; //ссылка-переход на др страницу со статьей
  a.textContent = text;
  item.append(li);
  li.append(a);
  return { li, a };
}

const paginator = document.getElementById("paginator");

function paginationPages(text, id) {
  const a = document.createElement("a");
  const li = document.createElement("li");
  a.textContent = text;
  a.href = `https://gorest.co.in/public-api/posts/${id}`;

  a.classList.add("mr-3");
  a.addEventListener("click", () => {
    a.classList.add(".active");
  });
  paginator.append(li);

  li.append(a);
  return li, a;
}
