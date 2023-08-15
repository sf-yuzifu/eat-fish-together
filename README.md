<p align="center">
    <br>
    <img width="128" height="128" src="./img/logo.png" alt="一起吃小鱼"/>
</p>

<h1 align="center">
一起吃小鱼
</h1>

<div align="center">
一个基于浏览器控制台（Devtool）的6k下落式小游戏
</div>

## 导入方法
- 在你的项目中导入仓库里的“main.js”即可～

## 游玩方式
- 在浏览器控制台中输入
```javascript
eat_fish_together()
```
即可开始游戏！

## 函数参数解释

```javascript
eat_fish_together(mode,play);
```

### 游戏模式(mode)

#### 1. 无尽模式(mode=0)
往控制台输入
```javascript
eat_fish_together(0);
```
或者默认
```javascript
eat_fish_together();
```
即可进入无尽模式。

在此模式中，可以使用S、D、F、J、K、L默认六个键位（未来会更新自定义键位）吃掉最下面一排的小鱼，没有时间上的限制，可供简单游玩。

#### 2. 20秒模式(mode=1)
往控制台输入
```javascript
eat_fish_together(1);
```
即可进入20秒模式。

在此模式中，比无尽模式新增倒计时和按错惩罚，20秒倒计时一过或者按错次数超过十次游戏结束，可以作为在无尽模式练习结束后的挑战。

### 音乐播放(play="[Audio URL]")
往控制台输入

```javascript
eat_fish_together(mode,"[Audio URL]");
```
其中[Audio URL]指你的音频直链，不是什么网易云音乐的音乐播放界面的链接！

## 部分预览
![游戏开始界面](img/img1.png)

![游戏结束界面](img/img2.png)