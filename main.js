const eat_fish_together = (mode = 0) => {
  let game_start = 0;
  let time = 20.0;
  if (window.onkeyup) {
    return "游戏还在进行中哟～";
  }
  let score = 0;
  let a;

  const time_down = (times) => {
    a = setInterval(() => {
      let num = new Date(times - Date.now()).getSeconds() + new Date(times - Date.now()).getMilliseconds() / 1000;
      if (times - Date.now() <= 0) {
        clearInterval(a);
        game_start = 0;
        console.log("游戏结束！");
        window.onkeyup = null;
      } else {
        num = Math.round(num * 1000) / 1000;
        time = num.toFixed(3);
        change_pos(fish_pos);
      }
    }, 10);
  };

  const review_fish = () => {
    score++;
    if (mode === 1 && time === 20) {
      time_down(Date.now() + 20000);
    }
    fish_pos.splice(0, 1);
    fish_pos.push(Math.floor(Math.random() * 6) + 1);
    change_pos(fish_pos);
  };

  const change_pos = (fish_pos) => {
    let fish_content = "%c分数：" + score + (mode === 1 ? "  倒计时：" + time : "") + "\n%c";
    for (let i = fish_pos.length - 1; i > -1; i--) {
      for (let n = 1; n < 7; n++) {
        if (n === fish_pos[i]) {
          fish_content += "[鱼]";
        } else {
          fish_content += "[  ]";
        }
      }
      fish_content += "\n";
    }
    fish_content += "[S ][D ][F ][ J][ K][ L]";
    console.log(fish_content, "font-size:24px;color:red;", "color:unset;");
  };
  game_start = 1;
  console.log("%c欢迎游玩《一起吃小鱼》！", "font-size:24px;color:rgb(255,255,0);background:black");
  console.log("%c请先用鼠标点击一下网页区域，游戏需要捕捉网页上的键盘事件（你应该懂吧）！", "font-size:16px;color:#6d50f0;");
  let fish_pos = [];
  for (let i = 0; i < 10; i++) {
    fish_pos.push(Math.floor(Math.random() * 6) + 1);
  }
  change_pos(fish_pos);
  function keyboard(event) {
    if (event.key !== undefined) {
      switch (event.key) {
        case "s":
          fish_pos[0] === 1 ? review_fish() : null;
          break;
        case "d":
          fish_pos[0] === 2 ? review_fish() : null;
          break;
        case "f":
          fish_pos[0] === 3 ? review_fish() : null;
          break;
        case "j":
          fish_pos[0] === 4 ? review_fish() : null;
          break;
        case "k":
          fish_pos[0] === 5 ? review_fish() : null;
          break;
        case "l":
          fish_pos[0] === 6 ? review_fish() : null;
          break;
        case "q":
          clearInterval(a);
          game_start = 0;
          console.log("游戏结束！");
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
如果你想切换到无尽模式，可以退出游戏后重新输入"eat_fish_together()"进入无尽模式。`,
      "font-size:24px;color:#fec433;",
      "font-size:16px;color:#fec433;",
      "color:unset;",
      "font-size:16px;color:red;",
      "color:unset;"
    );
    return ``;
  } else {
    console.log(
      `%c开始游戏！%c你可以随时按下Q键来退出游戏qwq
%c你现在处于%c无尽模式%c，如果你想切换到20秒模式，
可以退出游戏后重新输入"eat_fish_together(1)"进入20秒模式。`,
      "font-size:24px;color:#fec433;",
      "font-size:16px;color:#fec433;",
      "color:unset;",
      "font-size:16px;color:red;",
      "color:unset;"
    );
    return ``;
  }
};
