// ===== 商品データ =====
// 商品を増やすときは、{ ... } のかたまりをコピーして追加します。
// id          : 商品ごとに違う半角英数字(URLに使われます)
// tags        : 複数つけられます。例 ["女性", "学生"]
// images      : 画像のパス。1枚目が一覧に表示され、2枚目以降は詳細ページで切り替えられます
// specs       : 詳細ページの情報欄。[項目名, 内容] の組を好きなだけ書けます
// boothUrl    : その商品のBOOTHページのURL(いまはショップのトップを入れてあります)
const SHOP_URL = "https://goratenia.booth.pm/";

const ITEMS = [
  {
    id: "item01",
    name: "ミステリアス女子",
    tags: ["女性"],
    images: ["img/ごらてにあ_ミステリアス女子.png", "img/ごらてにあ_ミステリアス女子_02.png"],
    description: "黒髪ロングで眼鏡をかけた、物静かな女子学生の全身立ち絵です。眼鏡あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "8種"], ["その他の差分", "眼鏡あり/眼鏡無し"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item02",
    name: "お嬢様の学生",
    tags: ["女性"],
    images: ["img/ごらてにあ_お嬢様の学生.png"],
    description: "三つ編みを入れた金髪ロングの、上品な雰囲気の女子学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item03",
    name: "カフェ店員",
    tags: ["女性"],
    images: ["img/ごらてにあ_カフェ店員.png"],
    description: "ポニーテールに赤いエプロン姿の、カフェで働く女性の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item04",
    name: "クールな男子高校生",
    tags: ["男性"],
    images: ["img/ごらてにあ_クールな男子高校生.png"],
    description: "赤髪にヘッドホンをかけた、クールな雰囲気の男子高校生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item05",
    name: "シスター",
    tags: ["女性"],
    images: ["img/ごらてにあ_シスター.png"],
    description: "目隠しをした、穏やかな微笑みの修道女の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item06",
    name: "ダウナー系学生",
    tags: ["女性"],
    images: ["img/ごらてにあ_ダウナー系学生.png"],
    description: "青いメッシュの入った髪に、気だるげな表情の女子学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "5種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item07",
    name: "タバコスーツ男性",
    tags: ["男性"],
    images: ["img/ごらてにあ_タバコスーツ男性.png", "img/ごらてにあ_タバコスーツ男性_02.png"],
    description: "緑のジャケットを着てタバコを持つ、気だるい雰囲気の男性の全身立ち絵です。煙あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "8種"], ["その他の差分", "煙あり/煙なし"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item08",
    name: "ツン",
    tags: ["女性"],
    images: ["img/ごらてにあ_ツン.png"],
    description: "腕を組んで不機嫌そうにこちらを見る、長い黒髪の女子学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item09",
    name: "メスガキ",
    tags: ["女性"],
    images: ["img/ごらてにあ_メスガキ.png"],
    description: "ツインテールにパーカーワンピース姿で、こちらを見て笑う小悪魔風の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "7種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item10",
    name: "元気でスポーティな女子",
    tags: ["女性"],
    images: ["img/ごらてにあ_元気でスポーティな女子.png"],
    description: "大きなパーカーを着て敬礼のポーズをとる、明るく元気な女子の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item11",
    name: "女性マネージャー",
    tags: ["女性"],
    images: ["img/ごらてにあ_女性マネージャー.png", "img/ごらてにあ_女性マネージャー_02.png"],
    description: "丸眼鏡に赤いネクタイをつけた、仕事のできる雰囲気の女性の全身立ち絵です。眼鏡あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"], ["その他の差分", "眼鏡あり/眼鏡無し(眼鏡は2色)"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item12",
    name: "親しみやすい青年",
    tags: ["男性"],
    images: ["img/ごらてにあ_親しみやすい青年.png"],
    description: "緑のジャケットにジーンズ姿の、穏やかで親しみやすい青年の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item13",
    name: "赤髪長髪少女",
    tags: ["女性"],
    images: ["img/ごらてにあ_赤髪長髪少女.png"],
    description: "足元まで届く赤い長髪に、白いワンピースを着た少女の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item14",
    name: "大学生お酒女子",
    tags: ["女性"],
    images: ["img/ごらてにあ_大学生お酒女子.png"],
    description: "缶を片手に笑う、金髪ロングで快活な大学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item15",
    name: "地雷女子",
    tags: ["女性"],
    images: ["img/ごらてにあ_地雷女子.png"],
    description: "青紫の髪に紫のカーディガン、編み上げブーツ姿で、あざとくほほえむ全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "5種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item16",
    name: "包容力のある中年女性",
    tags: ["女性"],
    images: ["img/ごらてにあ_包容力のある中年女性.png", "img/ごらてにあ_包容力のある中年女性_02.png"],
    description: "眼鏡をかけ、ゆったりと髪をまとめた、包容力を感じさせる女性の全身立ち絵です。眼鏡あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "5種"], ["その他の差分", "眼鏡あり/眼鏡無し"]],
    boothUrl: SHOP_URL
  }
];

// ===== アイコン =====
// Google Fonts の Material Symbols(Outlined)から選んだアイコンです。
// https://fonts.google.com/icons で好きなアイコンを選び、SVGの path の中身(d="...")を
// ここに追加すると、HTMLの data-icon="名前" や createIcon("名前") で使えます。
const ICON_PATHS = {
  chevron_left: "M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z",
  chevron_right: "M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z",
  arrow_back: "m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z",
  open_in_new: "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z",
  image: "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z",
  broken_image: "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm43-314 172-172 170 170 171-171 44 44v-217H180v303l43 43Zm-43 254h600v-298l-44-44-171 171-170-170-172 172-43-43v212Zm0 0v-298 60-362 600Z",
  person: "M372-523q-42-42-42-108t42-108q42-42 108-42t108 42q42 42 42 108t-42 108q-42 42-108 42t-108-42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm324.5-346.5Q570-592 570-631t-25.5-64.5Q519-721 480-721t-64.5 25.5Q390-670 390-631t25.5 64.5Q441-541 480-541t64.5-25.5ZM480-631Zm0 411Z"
};

// アイコン(SVG)を1つ作る。色は文字色(currentColor)に合わせ、大きさはCSSの .icon で決めます
function createIcon(name) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("viewBox", "0 -960 960 960");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const path = document.createElementNS(svgNamespace, "path");
  path.setAttribute("d", ICON_PATHS[name] || "");
  svg.append(path);
  return svg;
}

// ===== クリエイター =====
// name : 表示する名前
// xId  : Xのユーザー名(@は付けない)。ない人は "" のままにします
// icon : アイコン画像のパス。例 "img/ごらてにあ_icon_AkaTen.png"
//        空のままだと、人のアイコン(シルエット)が丸の中に表示されます
const CREATORS = [
  { name: "AkaTen", xId: "AkaTen37", icon: "" },
  { name: "かに", xId: "", icon: "" },
  { name: "マンティス", xId: "mantis_gorat", icon: "" },
  { name: "nale", xId: "", icon: "" },
  { name: "スグメルト", xId: "", icon: "" }
];

// ===== 共通の関数(一覧ページと詳細ページの両方で使います) =====

// 画像の読み込みに失敗したとき、もう一方の表現のファイル名でもう一度だけ試す。
// 日本語のファイル名は、パソコンによって濁点などの内部表現が違うことがあるための対策です。
// それでも読み込めなければ onFail を実行します。
function watchImage(image, src, onFail) {
  const composed = src.normalize("NFC");
  const decomposed = src.normalize("NFD");
  let hasRetried = false;

  const handleError = () => {
    if (!hasRetried) {
      hasRetried = true;
      image.src = src === composed ? decomposed : composed;
    } else if (onFail) {
      onFail();
    }
  };

  image.addEventListener("error", handleError);

  // このスクリプトが動く前に、すでに失敗している場合
  if (image.complete && image.naturalWidth === 0 && image.getAttribute("src")) {
    handleError();
  }
}

// 画像を作る
function createImage(src, altText, className, onFail) {
  const image = document.createElement("img");
  image.className = className;
  image.alt = altText;
  image.decoding = "async";
  image.loading = "lazy";
  watchImage(image, src, onFail);
  image.src = src;
  return image;
}

// 画像がないとき・見つからないときの表示。path を渡すと、探したファイル名も表示する
function createPlaceholder(iconName, message, path) {
  const box = document.createElement("span");
  box.className = "thumb__placeholder";

  const icon = createIcon(iconName);
  icon.classList.add("thumb__placeholder-icon");

  const text = document.createElement("span");
  text.textContent = message;

  box.append(icon, text);

  if (path) {
    const pathText = document.createElement("span");
    pathText.className = "thumb__path";
    pathText.textContent = path;
    box.append(pathText);
  }

  return box;
}

// 画像エリアを作る
function createThumb(src, altText, isLarge) {
  const thumb = document.createElement("div");
  thumb.className = isLarge ? "thumb thumb--large" : "thumb";

  if (src) {
    thumb.append(createImage(src, altText, "thumb__image", () => {
      thumb.replaceChildren(createPlaceholder("broken_image", "画像が見つかりません", src));
    }));
  } else {
    thumb.append(createPlaceholder("image", "画像", ""));
  }

  return thumb;
}

// タグの一覧(ul)の中身を作り直す
function fillTags(listElement, tags) {
  listElement.replaceChildren();
  tags.forEach((tag) => {
    const tagItem = document.createElement("li");
    tagItem.className = "tag-list__item";
    tagItem.textContent = tag;
    listElement.append(tagItem);
  });
}

// ヘッダーのロゴ(HTMLに直接書いてある画像)にも同じ仕組みを使う
const headerLogo = document.querySelector(".header__logo-image");
if (headerLogo) {
  watchImage(headerLogo, headerLogo.getAttribute("src"), () => {
    headerLogo.hidden = true;
  });
}

// HTMLに書いた <span data-icon="名前"></span> に、アイコンを入れる
document.querySelectorAll("[data-icon]").forEach((slot) => {
  slot.replaceChildren(createIcon(slot.dataset.icon));
});