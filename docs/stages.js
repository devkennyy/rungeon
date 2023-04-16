// icons[0] is always going to be the icon above the prompt
const stages = [
  {
    id: 0,
    title: "A mysterious door",
    body: "That button looks like it might be important.",
    icons: [
      {
        name: "fa-door-open",
      },
    ],
    startDisabled: false,
    completed: false,
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
    startDisabled: true,
    completed: false,
    back: 0,
    next: 2,
  },
  {
    id: 2,
    title: "Steal from the dragon",
    body: "We need that coin, take it",
    icons: [
      {
        name: "fa-dragon",
      },
      {
        name: "🟡",
      },
    ],
    startDisabled: true,
    completed: false,
    back: 2,
    next: 4,
  },
  {
    id: 3,
    title: "A locked door",
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
    completed: false,
    back: 2,
    next: 4,
  },
  {
    id: 4,
    title: "A tile puzzle?",
    body: "How ominous",
    icons: [
      {
        name: "",
      },
    ],
    startDisabled: true,
    completed: false,
    back: 3,
    next: 5,
  },
  {
    id: 5,
    title: "It's dark in here",
    body: "I can't see, turn on the light",
    icons: [
      {
        name: "fa-lightbulb",
      },
    ],
    startDisabled: true,
    completed: false,
    back: 4,
    next: 6,
  },
  {
    id: 6,
    title: "Fuel the furnace",
    body: "Use the correct fuel",
    icons: [
      {
        name: "fa-fire-burner",
      },
    ],
    startDisabled: true,
    completed: false,
    back: 5,
    next: 7,
  },
  {
    id: 7,
    title: "Kill the ghost",
    body: "Hunt down the ghost already",
    icons: [
      {
        name: "fa-ghost",
      },
    ],
    startDisabled: true,
    completed: false,
    back: 6,
    next: 8,
  },
  {
    id: 8,
    title: "You did it?",
    body: "Get out while you can.",
    icons: [
      {
        name: "fa-person-running",
      },
    ],
    startDisabled: false,
    completed: false,
    back: -1,
    next: -1,
  },
];

const setStageText = stageData => {
  switch (stageData.icons.length) {
    case 1:
      document.getElementById("stage-title").innerText = stageData.title;
      document.getElementById("stage-body").innerText = stageData.body;
      break;
    case 2:
      document.getElementById("stage-title").innerText = stageData.title;
      document.getElementById("stage-body").innerText = stageData.body + " ";
      var textIcon = document.createElement("i");
      textIcon.id = "stage-body-icon";
      textIcon.innerText = stageData.icons[1].name;
      document.getElementById("stage-body").append(textIcon);
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

const disable = id => {
  $(`#${id}`).prop("disabled", true);
};

const enable = id => {
  $(`#${id}`).prop("disabled", false);
};

const handleStage = stageData => {
  //enable continue button by default
  enable("stage-btn-next");

  if (!stageData.completed && stageData.startDisabled) {
    disable("stage-btn-next");
  }

  switch (stageData.id) {
    case 1:
      handleStage1(stageData.id);
      break;
    case 2:
      handleStage2(stageData.id);
      break;
    case 3:
      handleStage3(stageData.id);
      break;
    case 4:
      handleStage4(stageData.id);
      break;
    case 5:
      handleStage5(stageData.id);
      break;
    case 6:
      handleStage6(stageData.id);
      break;
    case 7:
      handleStage7(stageData.id);
      break;
    case 8:
      handleStage8(stageData.id);
      break;
    default:
      break;
  }
};

const stageReset = stageData => {
  switch (stageData.id) {
    case 0: // fixes stage 0 inheriting stage 1 level functionality
    case 1:
    case 2:
      $("#stage-body-icon").show();
      break;
    case 3:
      $("#stage-icon-container").removeClass("fa-4x").addClass("fa-3x");
      $("#stage-icon-container").attr("style", "");
      $("#stage-icon").droppable("disable");
      break;
    case 4:
      $("#tileGroup").remove();
      break;
    case 5:
      $("#stage-icon").addClass("brightness-down");
      break;
    case 6:
      $("#icon-left-container").remove();
      $("#icon-right-container").remove();
    default:
      break;
  }
};

const setStageIcon = stageData => {
  $("#stage-icon").removeClass().addClass(`fas ${stageData.icons[0].name}`);
};

const setStage = stageData => {
  setStageIcon(stageData);
  setStageText(stageData);
  setStageButtons(stageData);
  handleStage(stageData);
  checkDevmode();
};

const handleStage1 = id => {
  let totalClicksRequired = 3;
  let clickCount = 1;
  let opacityCalculator = 1;
  $("#stage-icon").click(() => {
    clickCount++;
    opacityCalculator -= 1 / totalClicksRequired;
    $("#stage-icon").css("opacity", `${opacityCalculator.toString()}`);
    if (clickCount > totalClicksRequired) {
      stages[id].completed = true;
      enable("stage-btn-next");
    }
  });
};

const handleStage2 = id => {
  document.getElementById("stage-body-icon").addEventListener("click", () => {
    $("#stage-body-icon").hide();
    stages[id].completed = true;
    enable("stage-btn-next");
  });
};

const handleStage3 = id => {
  $("#stage-body-icon").addClass("unselectable");
  $("#stage-body-icon").draggable({ disabled: false, revert: "invalid" });
  $("#stage-icon").droppable({
    disabled: false,
    tolerance: "touch",
    over: function () {
      $("#stage-icon-container").removeClass("fa-3x").addClass("fa-4x");
      $("#stage-icon-container").attr("style", "margin-bottom: -7px; margin-top: -7px;");
    },
    out: function () {
      $("#stage-icon-container").removeClass("fa-4x").addClass("fa-3x");
      $("#stage-icon-container").attr("style", "");
    },
    drop: function () {
      $("#stage-body-icon").remove();
      $("#stage-icon").removeClass().addClass("fa-solid fa-lock-open");
      document.getElementById("stage-title").innerText = "The door is unlocked";
      document.getElementById("stage-body").innerText = "I knew that was useful, good work!";
      stages[id].completed = true;
      enable("stage-btn-next");
    },
  });
};

const handleStage4 = id => {
  // generates stage HTML
  $("#stage_container").prepend($("<div>", { id: "tileGroup" }));
  for (let i = 0; i < 9; i++) {
    $("#tileGroup").append($("<div>", { class: "tileContainer" }));
  }

  $(".tileContainer").append($("<div>", { class: "tile" }));
  $(".tile").append($("<i>", { class: "icon fas fa-dungeon fa-2x" }));
  let tileIds = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9"];
  //Randomly assign the IDs to the tiles
  $(".tile i").each(function () {
    let i = (Math.random() * tileIds.length) | 0;
    $(this).attr("id", tileIds.splice(i, 1)[0]);
  });

  $(".tile").draggable({ revert: true, revertDuration: 0 });
  $(".tileContainer").droppable({
    accept: ".tile",
    drop: function (event, ui) {
      if ($(this).children().length > 0) {
        //swap the IDs of the two elements

        let droppedId = $(ui.draggable).find("i").attr("id");
        let recievedId = $(this).find("i").attr("id");

        $(this).find("i").attr("id", droppedId);
        $(ui.draggable).find("i").attr("id", recievedId);
      }

      //Check if the tiles are in the correct order
      let tileList = $(".tile i");
      let correctCounter = 0;

      for (let i = 0; i < 9; i++) {
        if (tileList[i].id == `T${i + 1}`) {
          correctCounter++;
        }
      }
      if (correctCounter == 9) {
        document.getElementById("stage-title").innerText = "You did it!";
        document.getElementById("stage-body").innerText = "That wasn't too hard";
        stages[id].completed = true;
        enable("stage-btn-next");
      }
    },
  });
};

const handleStage6 = id => {
// Shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// append 6 icons into stage_container
//! change these icons to 3 fuels 3 non (staff, leaves, etc)
const iconArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
]

// shuffle icon array
const shuffledArray = shuffleArray(iconArray);
console.log(shuffledArray);

// append two container for the left and right side icons
$("#stage_container").append($("<div>", { id: "icon-left-container" }));
$("#stage_container").append($("<div>", { id: "icon-right-container" }));

// append 3 of six icons in iconArray to the icon left container
for (let i = 0; i < 3; i++) {
  $("#icon-left-container").append($("<i>", { class: `icon fas fa-${iconArray[i]} fa-2x` }));
  $(".icon").attr("id", shuffledArray[i]);
}

// append remaining 3 icons to the icon right container
for (let i = 3; i < 6; i++) {
  $("#icon-right-container").append($("<i>", { class: `icon fas fa-${iconArray[i]} fa-2x` }));
  $(".icon").attr("id", shuffledArray[i]);
}


// define the icons
const icons = $('.icon');
const campfire = $("#stage-icon")

// Add event listeners to icons for dragging
icons.each(function () {
  $(this).draggable({
    revert: true,
    revertDuration: 0,
    start: function () {
      $(this).addClass("dragging");
    },
    stop: function () {
      $(this).removeClass("dragging");
    },
  });
});

// check if icon is dropped touching the stage-icon class

// check that all fuels are hidden
};


    

// this should be false in production
let devmode = true;

const checkDevmode = () => {
  if (devmode){
    enable("stage-btn-next");
    console.log("stage completed (devmode)")
  };
};