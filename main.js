const eat_fish_together = (mode = 0, play = null) => {
  let style = document.createElement("style");
  style.innerHTML = `
  @font-face{
    font-family: 'TsangerYuYangT W05';
    src : url('https://blog.yzf.moe/font/TsangerYuYangT-W05.ttf');
}`;
  document.body.appendChild(style);
  let game_start = 0;
  let time = 20.0;
  if (window.onkeyup) {
    return "游戏还在进行中哟～";
  }
  let score = 0;
  let a;
  let music;

  let wrong_time = 10;
  if (play) {
    music = new Audio(play);
    music.loop = true;
    music.play();
  }

  const time_down = (times) => {
    a = setInterval(() => {
      let num =
        new Date(times - Date.now()).getSeconds() +
        new Date(times - Date.now()).getMilliseconds() / 1000;
      if (times - Date.now() <= 0 || wrong_time < 1) {
        clearInterval(a);
        game_start = 0;
        if (play) music.pause();
        console.log(
          (wrong_time < 1 ? "由于按错次数过多，" : "") + "游戏结束！"
        );
        window.onkeyup = null;
      } else {
        num = Math.round(num * 1000) / 1000;
        time = num.toFixed(3);
        change_pos(fish_pos);
      }
    }, 10);
  };
  let start = 0;
  const review_fish = () => {
    score++;
    new Audio(
      "https://creation.codemao.cn/716/appcraft/SOUND_Z66LQAW3jU_1661068419445"
    ).play();
    if (mode === 1 && time === 20 && start === 0) {
      time_down(Date.now() + 20000);
      start = 1;
    }
    fish_pos.splice(0, 1);
    fish_pos.push(Math.floor(Math.random() * 6) + 1);
    change_pos(fish_pos);
  };

  const change_pos = (fish_pos) => {
    let fish_content =
      "%c分数：" + score + (mode === 1 ? "  倒计时：" + time : "") + "\n%c";
    for (let i = fish_pos.length - 1; i > -1; i--) {
      for (let n = 1; n < 7; n++) {
        if (n === fish_pos[i]) {
          fish_content += "[鱼]";
        } else {
          fish_content += "[    ]";
        }
      }
      fish_content += "\n";
    }
    fish_content += "[Ｓ][Ｄ][Ｆ][Ｊ][Ｋ][Ｌ]";
    // if (navigator.userAgent.indexOf("Firefox") === -1) {
    //
    // } else {
    //   fish_content += "[Ｓ][Ｄ][Ｆ][Ｊ][Ｋ][Ｌ]";
    // }
    console.log(
      fish_content,
      "font-size:28px;color:red;",
      "font-size:24px;color:unset;font-family: 'TsangerYuYangT W05' !important;"
    );
  };
  game_start = 1;
  console.log(
    "%c ",
    `padding:64px; background-image: url('${logo_image}'); background-size: contain; background-repeat: no-repeat; `
  );
  console.log(
    "%c欢迎游玩《一起吃小鱼》！",
    "font-size:24px;color:rgb(255,255,0);background:black"
  );
  console.log(
    "%c请先用鼠标点击一下网页区域，游戏需要捕捉网页上的键盘事件（你应该懂吧）！",
    "font-size:16px;color:#6d50f0;"
  );
  let fish_pos = [];
  for (let i = 0; i < 10; i++) {
    fish_pos.push(Math.floor(Math.random() * 6) + 1);
  }
  change_pos(fish_pos);
  function keyboard(event) {
    if (event.key !== undefined) {
      switch (event.key) {
        case "s":
          fish_pos[0] === 1 ? review_fish() : wrong_time--;
          break;
        case "d":
          fish_pos[0] === 2 ? review_fish() : wrong_time--;
          break;
        case "f":
          fish_pos[0] === 3 ? review_fish() : wrong_time--;
          break;
        case "j":
          fish_pos[0] === 4 ? review_fish() : wrong_time--;
          break;
        case "k":
          fish_pos[0] === 5 ? review_fish() : wrong_time--;
          break;
        case "l":
          fish_pos[0] === 6 ? review_fish() : wrong_time--;
          break;
        case "q":
          clearInterval(a);
          game_start = 0;
          console.log("游戏结束！");
          if (play) music.pause();
          window.onkeyup = null;
          break;
        default:
          return null;
      }
    }
  }
  window.onkeyup = keyboard;
  if (mode === 1) {
    console.log(
      `%c开始游戏！%c你可以随时按下Q键来退出游戏qwq
%c你现在处于%c20秒模式%c，倒计时将会在你吃掉第一只小鱼后开始。
如果你想切换到无尽模式，可以退出游戏后重新输入"eat_fish_together()"进入无尽模式。
你知道吗，你可以使用%c eat_fish_together(mode,"[Audio URL]")%c来进行背景音乐的播放！`,
      "font-size:24px;color:#fec433;",
      "font-size:16px;color:#fec433;",
      "color:unset;",
      "font-size:16px;color:red;",
      "color:unset;",
      "font-size:14px;color:red;",

      "color:unset;"
    );
    return `游戏开源地址：https://gitee.com/sf-yuzifu/eat-fish-together`;
  } else {
    console.log(
      `%c开始游戏！%c你可以随时按下Q键来退出游戏qwq
%c你现在处于%c无尽模式%c，如果你想切换到20秒模式，
可以退出游戏后重新输入"eat_fish_together(1)"进入20秒模式。
你知道吗，你可以使用%c eat_fish_together(mode,"[Audio URL]")%c来进行背景音乐的播放！`,
      "font-size:24px;color:#fec433;",
      "font-size:16px;color:#fec433;",
      "color:unset;",
      "font-size:16px;color:red;",
      "color:unset;",
      "font-size:14px;color:red;",

      "color:unset;"
    );
    return `游戏开源地址：https://gitee.com/sf-yuzifu/eat-fish-together`;
  }
};

const logo_image =
  "data:image/png;base64,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";
