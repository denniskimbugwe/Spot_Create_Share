function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PixsWntsKR":
        Script1();
        break;
      case "6GDOqFyfwIn":
        Script2();
        break;
      case "6ic6TkJzIOC":
        Script3();
        break;
      case "6iKBho5vCus":
        Script4();
        break;
      case "5g0XxBy8nrY":
        Script5();
        break;
      case "6VEpWEtLdoP":
        Script6();
        break;
      case "69ecAggZerH":
        Script7();
        break;
      case "6KIyf4wzKRI":
        Script8();
        break;
      case "5X9SZhWLbkX":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5htH6Tx1EcD');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '63I6XbHCP2S';
const growAmount = 1.2;
const delay = 2111;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6mvtMRPHMR5');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '5ZIub2XAVmD';
const growAmount = 1.2;
const delay = 1500;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5yWUDbxHaNT');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '5cu024b8Q52';
const growAmount = 1.2;
const delay = 13000;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5VIpVVoeu0q');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '5wBK1JMdkLX';
const growAmount = 1.2;
const delay = 17562;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5Xmzg4BwFNt');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6o7UmZKjQIT';
const growAmount = 1.2;
const delay = 5156;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6fEplkmLX57');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6r1PuA4raoN';
const growAmount = 1.2;
const delay = 24781;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  const target = object('6moSzSV9H1a');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6agLEWpX4Zj';
const growAmount = 1.2;
const delay = 2111;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5UfqDuWEK33');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6PE2sWH0kAA';
const growAmount = 1.2;
const delay = 1500;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6A0rm8SEoVb');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '5fe2qXNYJk2';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
