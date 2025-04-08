console.log("フォートポリオウェブページへようこそ！");

document.querySelectorAll(`nav ul li a`).forEach(anchor => {
    anchor.addEventListener(`click`, function (e) {
        e.preventDefault();  // 基本動作を防ぐ(リンククリック等)

        // クリックしたリンクのhref属性に該当するidへ柔らかく移動
        document.querySelector(this.getAttribute(`href`)).scrollIntoView({
            behavior: `smooth`,
            block: `start`
        });
    });
});