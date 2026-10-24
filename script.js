// 一覧ページ:タグ絞り込みと商品カードの表示
const filterArea = document.getElementById("filter");
const itemList = document.getElementById("item-list");

// 商品カード(タップすると詳細ページへ移動する)を1枚作る
function createCard(item) {
  const card = document.createElement("a");
  card.className = "item-card";
  card.href = "item.html?id=" + encodeURIComponent(item.id);

  const body = document.createElement("div");
  body.className = "item-card__body";

  const title = document.createElement("h3");
  title.className = "item-card__title";
  title.textContent = item.name;

  const tagList = document.createElement("ul");
  tagList.className = "tag-list";
  fillTags(tagList, item.tags);

  body.append(title, tagList);
  card.append(createThumb(item.images[0], item.name, false), body);
  return card;
}

// 選ばれたタグに合う商品だけを並べ直す
function renderList(selectedTag) {
  itemList.replaceChildren();
  ITEMS
    .filter((item) => selectedTag === "all" || item.tags.includes(selectedTag))
    .forEach((item) => {
      itemList.append(createCard(item));
    });
}

// タグのボタンを、商品データに含まれるタグから自動で作る
function renderFilter() {
  const allTags = [...new Set(ITEMS.flatMap((item) => item.tags))];

  ["all", ...allTags].forEach((tag, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter__button";
    button.textContent = tag === "all" ? "すべて" : tag;

    if (index === 0) {
      button.classList.add("filter__button--active");
    }

    button.addEventListener("click", () => {
      filterArea.querySelectorAll(".filter__button").forEach((other) => {
        other.classList.remove("filter__button--active");
      });
      button.classList.add("filter__button--active");
      renderList(tag);
    });

    filterArea.append(button);
  });
}

renderFilter();
renderList("all");

// クリエイター紹介(アイコン・名前・Xへのリンク)
const creatorList = document.getElementById("creator-list");

function renderCreators() {
  CREATORS.forEach((creator) => {
    const card = document.createElement("li");
    card.className = "creator-card";

    const icon = document.createElement("div");
    icon.className = "creator-card__icon";

    // アイコンがない・読み込めないときは、人のアイコン(シルエット)を表示する
    const showPlaceholder = () => {
      const placeholder = createIcon("person");
      placeholder.classList.add("creator-card__placeholder");
      icon.replaceChildren(placeholder);
    };

    if (creator.icon) {
      icon.append(createImage(creator.icon, creator.name + "のアイコン", "creator-card__image", showPlaceholder));
    } else {
      showPlaceholder();
    }

    const name = document.createElement("h3");
    name.className = "creator-card__name";
    name.textContent = creator.name;

    card.append(icon, name);

    if (creator.xId) {
      const link = document.createElement("a");
      link.className = "creator-card__link";
      link.href = "https://x.com/" + creator.xId;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "@" + creator.xId;
      card.append(link);
    }

    creatorList.append(card);
  });
}

renderCreators();