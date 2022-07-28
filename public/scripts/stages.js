const stages = [
  {
    id: 0,
    title: "A mystery door, how exciting",
    body: "Maybe that button does something?",
    icon: {
      name: "door-open"
    },
    back: -1,
    next: 1,
  },
  {
    id: 1,
    title: "The bugs are coming",
    body: "SQUASH THE BUG! DO IT! DO IT!",
    icon: {
      name: "bugs"
    },
    back: 0,
    next: 2,
  },
  {
    id: 2,
    title: "Is that a dragon",
    body: "Take a breath, you've deserved it",
    icon: {
      name: "wind"
    },
    back: 1,
    next: 3,
  },
  {
    id: 3,
    title: "That's definitely a dragon",
    body: "Give him the coin or something!",
    icon: {
      name: "dragon"
    },
    back: 2,
    next: 4,
  },
  {
    id: 4,
    title: "The door is locked",
    body: "What's this in your pocket? I doubt it's useful",
    icon: {
      name: "lock"
    },
    back: 3,
    next: 5,
  },
  {
    id: 5,
    title: "Time to eat",
    body: "You've got to eat something, or you'll starve",
    icon: {
      name: "bacon"
    },
    back: 4,
    next: 6,
  },
  {
    id: 6,
    title: "You did it?",
    body: "Get out while you can.",
    icon: {
      name: "person-running"
    },
    back: -1,
    next: -1,
  },
];

const setStageText = stageData => {
  document.getElementById("stage-title").innerText = stageData.title;
  document.getElementById("stage-body").innerText = stageData.body;
};

const setStageButtons = stageData => {
  if (stageData.next == -1) {
    $("#stage-btn-restart").show();
    $("#stage-btn-back").hide();
    $("#stage-btn-next").hide();
  } else {
    $("#stage-btn-restart").hide();
    $("#stage-btn-back").show();
    $("#stage-btn-next").show();
  }

  if (stageData.back == -1) {
    $("#stage-btn-back").hide();
  }
};

const setStageIcon = stageData => {
  document.getElementById(
    "stage-icon-container"
  ).innerHTML = `<i "id=stage-icon" class="fas fa-${stageData.icon.name}"></i>`;
};

const setStage = stageData => {
  setStageIcon(stageData);
  setStageText(stageData);
  setStageButtons(stageData);
};
