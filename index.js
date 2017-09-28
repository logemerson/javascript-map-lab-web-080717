const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

function sortBot(bot) {
  var copyBot = Object.assign({}, bot)
  knownDecepticons.includes(copyBot.name) ? copyBot.alliance = "decepticon" : copyBot.alliance = "autobot"
  return copyBot
}

var sortedRobots = robots.map(sortBot)

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var coloredZebraStripes = zebraStripes.map((stripe, index) => {
  var stripeCopy = Object.assign({}, stripe, index)
  if (index % 2 === 0) {
    stripeCopy.color = "black"
  } else {
    stripeCopy.color = "white"
  }
  return stripeCopy
})
