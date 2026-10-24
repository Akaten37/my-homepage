// ===== 商品データ =====
// 商品を増やすときは、{ ... } のかたまりをコピーして追加します。
// id          : 商品ごとに違う半角英数字(URLに使われます)
// creator     : 作ったクリエイターの名前。わからないときは "" のままにすると表示されません
// tags        : 複数つけられます。例 ["女性", "学生"]
// images      : 画像のパス。1枚目が一覧に表示され、2枚目以降は詳細ページで切り替えられます
// specs       : 詳細ページの情報欄。[項目名, 内容] の組を好きなだけ書けます
// boothUrl    : その商品のBOOTHページのURL(いまはショップのトップを入れてあります)
const SHOP_URL = "https://goratenia.booth.pm/";

// 詳細ページで、商品の画像の最後に自動で付ける注意事項の画像(タグで選びます)
const NOTICE_IMAGES = {
  "男性": "img/ごらてにあ_注意事項_青.png",
  "女性": "img/ごらてにあ_注意事項_赤.png"
};

const ITEMS = [
  {
    id: "item11",
    name: "眼鏡美人女性マネージャー",
    creator: "AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_女性マネージャー.png", "img/ごらてにあ_女性マネージャー_02.png"],
    description: "丸眼鏡に赤いネクタイをつけた、仕事のできる雰囲気の女性の全身立ち絵です。眼鏡あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"], ["その他の差分", "眼鏡あり/眼鏡無し(眼鏡は2色)"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item15",
    name: "地雷女子",
    creator: "nale",
    tags: ["女性"],
    images: ["img/ごらてにあ_地雷女子.png"],
    description: "青紫の髪に紫のカーディガン、編み上げブーツ姿で、あざとくほほえむ全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "5種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item16",
    name: "包容力のある中年女性",
    creator: "スグメルト",
    tags: ["女性"],
    images: ["img/ごらてにあ_包容力のある中年女性.png", "img/ごらてにあ_包容力のある中年女性_02.png"],
    description: "眼鏡をかけ、ゆったりと髪をまとめた、包容力を感じさせる女性の全身立ち絵です。眼鏡あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "5種"], ["その他の差分", "眼鏡あり/眼鏡無し"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item09",
    name: "メスガキ",
    creator: "スグメルト",
    tags: ["女性"],
    images: ["img/ごらてにあ_メスガキ.png"],
    description: "ツインテールにパーカーワンピース姿で、こちらを見て笑う小悪魔風の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "7種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item13",
    name: "赤髪長髪少女",
    creator: "AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_赤髪長髪少女.png"],
    description: "足元まで届く赤い長髪に、白いワンピースを着た少女の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item03",
    name: "カフェ店員",
    creator: "線画:nale/塗り:AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_カフェ店員.png"],
    description: "ポニーテールに赤いエプロン姿の、カフェで働く女性の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item05",
    name: "シスター",
    creator: "AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_シスター.png"],
    description: "目隠しをした、穏やかな微笑みの修道女の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item12",
    name: "親しみやすい青年",
    creator: "かに",
    tags: ["男性"],
    images: ["img/ごらてにあ_親しみやすい青年.png"],
    description: "緑のジャケットにジーンズ姿の、穏やかで親しみやすい青年の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item07",
    name: "タバコスーツ男性",
    creator: "かに",
    tags: ["男性"],
    images: ["img/ごらてにあ_タバコスーツ男性.png", "img/ごらてにあ_タバコスーツ男性_02.png"],
    description: "緑のジャケットを着てタバコを持つ、気だるい雰囲気の男性の全身立ち絵です。煙あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "8種"], ["その他の差分", "煙あり/煙なし"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item04",
    name: "クールな男子高校生",
    creator: "かに",
    tags: ["男性"],
    images: ["img/ごらてにあ_クールな男子高校生.png"],
    description: "赤髪にヘッドホンをかけた、クールな雰囲気の男子高校生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item08",
    name: "ツン",
    creator: "nale",
    tags: ["女性"],
    images: ["img/ごらてにあ_ツン.png"],
    description: "腕を組んで不機嫌そうにこちらを見る、長い黒髪の女子学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item06",
    name: "ダウナー系学生",
    creator: "nale",
    tags: ["女性"],
    images: ["img/ごらてにあ_ダウナー系学生.png"],
    description: "青いメッシュの入った髪に、気だるげな表情の女子学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "5種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item02",
    name: "お嬢様の学生",
    creator: "nale",
    tags: ["女性"],
    images: ["img/ごらてにあ_お嬢様の学生.png"],
    description: "三つ編みを入れた金髪ロングの、上品な雰囲気の女子学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item10",
    name: "元気でスポーティな女子",
    creator: "AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_元気でスポーティな女子.png"],
    description: "大きなパーカーを着て敬礼のポーズをとる、明るく元気な女子の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item14",
    name: "大学生お酒女子",
    creator: "AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_大学生お酒女子.png"],
    description: "缶を片手に笑う、金髪ロングで快活な大学生の全身立ち絵です。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "4種"]],
    boothUrl: SHOP_URL
  },
  {
    id: "item01",
    name: "ミステリアス女子",
    creator: "AkaTen",
    tags: ["女性"],
    images: ["img/ごらてにあ_ミステリアス女子.png", "img/ごらてにあ_ミステリアス女子_02.png"],
    description: "黒髪ロングで眼鏡をかけた、物静かな女子学生の全身立ち絵です。眼鏡あり・なしの差分がついています。",
    specs: [["種類", "全身立ち絵"], ["表情差分", "8種"], ["その他の差分", "眼鏡あり/眼鏡無し"]],
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
  arrow_forward: "M665.08-450H180v-60h485.08L437.23-737.85 480-780l300 300-300 300-42.77-42.15L665.08-450Z",
  shopping_cart: "M236.58-118.12q-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43-29.15 0-49.57-20.43Zm387.69 0q-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69q-29.16 0-49.58-20.43ZM240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27h-486Zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H60v-60h113.85l38 80ZM342-517.69h280-280Z",
  edit: "M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z",
  sentiment_satisfied: "M616.24-527.69q21.84 0 37.03-15.29 15.19-15.28 15.19-37.11t-15.28-37.02q-15.28-15.2-37.12-15.2-21.83 0-37.02 15.29-15.19 15.28-15.19 37.11t15.28 37.02q15.28 15.2 37.11 15.2Zm-272.3 0q21.83 0 37.02-15.29 15.19-15.28 15.19-37.11t-15.28-37.02q-15.28-15.2-37.11-15.2-21.84 0-37.03 15.29-15.19 15.28-15.19 37.11t15.28 37.02q15.28 15.2 37.12 15.2Zm250.52 220.34q51.85-35.04 76.46-92.65H618q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-52.92q24.61 57.61 76.46 92.65 51.85 35.04 114.46 35.04 62.61 0 114.46-35.04Zm-262.6 177.43q-69.37-29.92-120.68-81.21-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100q-78.84 0-148.21-29.92ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z",
  folder: "M172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h219.61l80 80h315.77Q818-700 839-679q21 21 21 51.31v375.38Q860-222 839-201q-21 21-51.31 21H172.31Zm0-60h615.38q5.39 0 8.85-3.46t3.46-8.85v-375.38q0-5.39-3.46-8.85t-8.85-3.46H447.38l-80-80H172.31q-5.39 0-8.85 3.46t-3.46 8.85v455.38q0 5.39 3.46 8.85t8.85 3.46ZM160-240v-480 480Z",
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

// ヘッダーのロゴやメインビジュアル(HTMLに直接書いてある画像)にも同じ仕組みを使う
document.querySelectorAll(".header__logo-image, .hero img").forEach((image) => {
  watchImage(image, image.getAttribute("src"), () => {
    image.style.display = "none";
  });
});

// HTMLに書いた <span data-icon="名前"></span> に、アイコンを入れる
document.querySelectorAll("[data-icon]").forEach((slot) => {
  slot.replaceChildren(createIcon(slot.dataset.icon));
});