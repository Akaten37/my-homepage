// 詳細ページ:URLの ?id=... の商品を表示し、矢印で切り替える
const stage = document.getElementById("stage");
const gallery = document.getElementById("gallery");
const dots = document.getElementById("dots");
const nameText = document.getElementById("item-name");
const tagList = document.getElementById("item-tags");
const descriptionText = document.getElementById("item-description");
const specList = document.getElementById("item-specs");
const boothLink = document.getElementById("item-link");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;
let currentImageIndex = 0;

// URLのidから、何番目の商品かを調べる(見つからなければ最初の商品)
function getIndexFromUrl() {
  const id = new URLSearchParams(window.location.search).get("id");
  const index = ITEMS.findIndex((item) => item.id === id);
  return index === -1 ? 0 : index;
}

// 詳細ページで見せる画像の一覧(商品の画像のあとに、タグに合った注意事項の画像を付ける)
function getDetailImages(item) {
  const noticeTag = item.tags.find((tag) => NOTICE_IMAGES[tag]);
  return noticeTag ? [...item.images, NOTICE_IMAGES[noticeTag]] : item.images;
}

// 大きい画像を横一列に並べる。スマホでは指で横にスワイプして切り替えられる
function renderStage(item) {
  stage.replaceChildren();

  getDetailImages(item).forEach((src) => {
    const isNotice = Object.values(NOTICE_IMAGES).includes(src);
    const slide = createThumb(src, isNotice ? "注意事項/禁止行為" : item.name, true);
    slide.classList.add("viewer__slide");
    stage.append(slide);
  });

  stage.scrollLeft = 0;
  currentImageIndex = -1;
  updateActiveImage(0);
}

// 指定した番号の画像までスライドする
function showImage(imageIndex) {
  stage.scrollTo({ left: stage.clientWidth * imageIndex, behavior: "smooth" });
}

// 今見えている画像の番号を、点と小さな画像の表示に反映する
function updateActiveImage(imageIndex) {
  if (imageIndex === currentImageIndex) {
    return;
  }
  currentImageIndex = imageIndex;

  gallery.querySelectorAll(".gallery__button").forEach((button, index) => {
    button.classList.toggle("gallery__button--active", index === imageIndex);
  });

  dots.querySelectorAll(".dots__button").forEach((button, index) => {
    const isActive = index === imageIndex;
    button.classList.toggle("dots__button--active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

// 画像が2枚以上ある商品だけ、今どの画像を見ているかを示す点(インジケーター)を出す
function renderDots(item) {
  dots.replaceChildren();
  const images = getDetailImages(item);
  dots.hidden = images.length < 2;

  images.forEach((_, imageIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dots__button";
    button.setAttribute("aria-label", (imageIndex + 1) + "枚目の画像を見る");
    button.addEventListener("click", () => {
      showImage(imageIndex);
    });
    dots.append(button);
  });
}

// 画像が2枚以上ある商品だけ、小さな画像の切り替えボタンを出す
function renderGallery(item) {
  gallery.replaceChildren();
  const images = getDetailImages(item);
  gallery.hidden = images.length < 2;

  images.forEach((src, imageIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery__button";
    button.setAttribute("aria-label", (imageIndex + 1) + "枚目の画像を見る");

    button.append(createImage(src, "", "gallery__image"));
    button.addEventListener("click", () => {
      showImage(imageIndex);
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
  renderDots(item);
  renderStage(item);
  nameText.textContent = item.name;
  fillTags(tagList, item.tags);
  descriptionText.textContent = item.description;
  // クリエイター名がある商品は、情報欄の一番上に出す
  renderSpecs(item.creator ? [["クリエイター", item.creator], ...item.specs] : item.specs);
  boothLink.href = item.boothUrl;
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

// 横にスライドしたら、止まった位置の画像を「今見ている画像」にする
stage.addEventListener("scroll", () => {
  updateActiveImage(Math.round(stage.scrollLeft / stage.clientWidth));
});

// PCのマウスでも、画像をつかんで左右にずらすと切り替えられる
let dragStartX = null;

stage.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse") {
    dragStartX = event.clientX;
  }
});

window.addEventListener("pointerup", (event) => {
  if (dragStartX === null) {
    return;
  }
  const distance = event.clientX - dragStartX;
  dragStartX = null;
  if (Math.abs(distance) > 40) {
    showImage(currentImageIndex + (distance < 0 ? 1 : -1));
  }
});

// 画像をつかんだときに、ブラウザの画像ドラッグが始まらないようにする
stage.addEventListener("dragstart", (event) => {
  event.preventDefault();
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