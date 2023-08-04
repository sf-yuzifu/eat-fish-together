let game_start = 0;
const eat_fish_together = () => {
  if (game_start === 1) {
    return "游戏还在进行中哟～";
  }
  let score = 0;
  const review_fish = () => {
    score++;
    fish_pos.splice(0, 1);
    fish_pos.push(Math.floor(Math.random() * 6) + 1);
    change_pos(fish_pos);
  };

  const change_pos = (fish_pos) => {
    let fish_content = "";
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
    fish_content += "[S ][D ][F ][ J][ K][ L]            分数：" + score;
    console.log(fish_content);
  };
  game_start = 1;
  let fish_pos = [];
  for (let i = 0; i < 10; i++) {
    fish_pos.push(Math.floor(Math.random() * 6) + 1);
  }
  change_pos(fish_pos);
  window.addEventListener("keyup", function (event) {
    if (event.key !== undefined && game_start === 1) {
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
          game_start = 0;
          console.log("游戏结束！");
          break;
        default:
          return null;
      }
    }
  });
  return "开始游戏！你可以随时按下Q键来退出游戏qwq";
};
