// 詳細ページ:URLの ?id=... の商品を表示し、矢印で切り替える
const stage = document.getElementById("stage");
const gallery = document.getElementById("gallery");
const countText = document.getElementById("count");
const nameText = document.getElementById("item-name");
const tagList = document.getElementById("item-tags");
const descriptionText = document.getElementById("item-description");
const specList = document.getElementById("item-specs");
const boothLink = document.getElementById("item-link");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;

// URLのidから、何番目の商品かを調べる(見つからなければ最初の商品)
function getIndexFromUrl() {
  const id = new URLSearchParams(window.location.search).get("id");
  const index = ITEMS.findIndex((item) => item.id === id);
  return index === -1 ? 0 : index;
}

// 大きい画像を、指定した番号の画像に入れ替える
function showImage(item, imageIndex) {
  stage.replaceChildren(createThumb(item.images[imageIndex], item.name, true));

  gallery.querySelectorAll(".gallery__button").forEach((button, index) => {
    button.classList.toggle("gallery__button--active", index === imageIndex);
  });
}

// 画像が2枚以上ある商品だけ、小さな画像の切り替えボタンを出す
function renderGallery(item) {
  gallery.replaceChildren();
  gallery.hidden = item.images.length < 2;

  item.images.forEach((src, imageIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery__button";
    button.setAttribute("aria-label", (imageIndex + 1) + "枚目の画像を見る");

    button.append(createImage(src, "", "gallery__image"));
    button.addEventListener("click", () => {
      showImage(item, imageIndex);
    });
    gallery.append(button);
  });
}

// 情報欄(種類・表情差分など)を作る
function renderSpecs(specs) {
  specList.replaceChildren();

  specs.forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "spec__row";

    const term = document.createElement("dt");
    term.className = "spec__label";
    term.textContent = label;

    const detail = document.createElement("dd");
    detail.className = "spec__value";
    detail.textContent = value;

    row.append(term, detail);
    specList.append(row);
  });
}

// 指定した番号の商品を表示する(端まで行ったら反対側に戻る)
function showItem(index) {
  currentIndex = (index + ITEMS.length) % ITEMS.length;
  const item = ITEMS[currentIndex];

  renderGallery(item);
  showImage(item, 0);
  nameText.textContent = item.name;
  fillTags(tagList, item.tags);
  descriptionText.textContent = item.description;
  renderSpecs(item.specs);
  boothLink.href = item.boothUrl;
  countText.textContent = (currentIndex + 1) + " / " + ITEMS.length;
  document.title = item.name + " | ごらてにあ";

  // ページを読み込み直さずに、URLだけ今の商品に合わせる
  try {
    window.history.replaceState(null, "", "?id=" + encodeURIComponent(item.id));
  } catch (error) {
    // ファイルを直接開いている場合などはURL更新を行わない
  }
}

prevButton.addEventListener("click", () => {
  showItem(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showItem(currentIndex + 1);
});

// キーボードの左右キーでも切り替えられる
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    showItem(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    showItem(currentIndex + 1);
  }
});

// 商品が1つだけのときは矢印を隠す
if (ITEMS.length < 2) {
  prevButton.hidden = true;
  nextButton.hidden = true;
}

showItem(getIndexFromUrl());