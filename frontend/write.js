// <div class="item-list">
//         <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
//         <div class="item-list__info">
//           <div class="item-list__info-title">게이밍 PC 팝니다</div>
//           <div class="item-list__meta">역삼동 19초 전</div>
//           <div class="item-list_price">100만원</div>
//         </div>

const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error(e);
  }

  console.log("제출완료");
};

form.addEventListener("submit", handleSubmitForm);
