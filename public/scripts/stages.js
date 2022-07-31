// icons[0] is always going to be the icon above the prompt
const stages = [
  {
    id: 0,
    title: "A mystery door, how exciting",
    body: "Maybe that button does something?",
    icons: [
      {
        name: "fa-door-open",
      },
    ],
    startDisabled: false,
    back: -1,
    next: 1,
  },
  {
    id: 1,
    title: "The bugs are coming",
    body: "SQUASH THE BUG! DO IT! DO IT!",
    icons: [
      {
        name: "fa-bugs",
      },
    ],
    startDisabled: false,
    back: 0,
    next: 2,
  },
  {
    id: 2,
    title: "Is that a dragon",
    body: "Take a breath, you've deserved it",
    icons: [
      {
        name: "fa-circle-question", // originally fa-wind
      },
      // {
      //   name: ""
      // }
    ],
    startDisabled: false,
    back: 1,
    next: 3,
  },
  {
    id: 3,
    title: "That's definitely a dragon",
    body: "Give him the coin or something!",
    icons: [
      {
        name: "fa-dragon",
      },
      {
        name: "🟡",
      },
    ],
    startDisabled: true,
    back: 2,
    next: 4,
  },
  {
    id: 4,
    title: "The door is locked",
    body: "What's this in your pocket? I doubt it's useful",
    icons: [
      {
        name: "fa-lock",
      },
      {
        name: "🗝️",
      },
    ],
    startDisabled: true,
    back: 3,
    next: 5,
  },
  {
    id: 5,
    title: "Time to eat",
    body: "You've got to eat something, or you'll starve",
    icons: [
      {
        name: "fa-bacon",
      },
    ],
    startDisabled: false,
    back: 4,
    next: 6,
  },
  {
    id: 6,
    title: "You did it?",
    body: "Get out while you can.",
    icons: [
      {
        name: "fa-person-running",
      },
    ],
    startDisabled: false,
    back: -1,
    next: -1,
  },
];

const setStageText = stageData => {
  switch(stageData.icons.length) {
    case 1:
      document.getElementById("stage-title").innerText = stageData.title;
      document.getElementById("stage-body").innerText = stageData.body;
      break;
    case 2:
      document.getElementById("stage-title").innerText = stageData.title;
      document.getElementById("stage-body")
        .innerText = stageData.body + " " + stageData.icons[1].name;
      break;
    default:
      console.log("too many icons.");
      break;
  }
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
  $("#stage-icon").removeClass().addClass(`fas ${stageData.icons[0].name}`);
};

const setStage = stageData => {
  setStageIcon(stageData);
  setStageText(stageData);
  setStageButtons(stageData);
};
