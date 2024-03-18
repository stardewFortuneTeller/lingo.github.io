
// External JS? No way.

const brown = "rgb(128, 56, 51)";
const mint = "rgb(8,252,164)";
const lime = "rgb(0,255,0)";
const magenta = "rgb(255,0,255)";
const lavender = "rgb(192,164,236)";
const cream = "rgb(256,228,156)";
var helpLevel = 0;
var color = "";

document.getElementById("answer-field").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit").click();
    }
});

// Level 1:

var startingRoom = [
	['LEVEL', 25, magenta, 2], 
	['HI', 'HI', 'white', 1],
	['TYPE', 'TYPE', 'white', 1],
	['THIS', 'THIS', 'white', 1],
	['WRITE', 'WRITE', 'white', 1],
	['SAME', 'SAME', 'white', 1]]
;
var heightTutorial = [
	['HI', 'HIGH', 'white', 0], 
	['HI', 'HELLO', 'white', 2]
];
var theTenacious = [
	['LEVEL', 'LEVEL', 'white', 1],
	['RACECAR', 'RACECAR', 'white', 1], 
	['SOLOS', 'SOLOS', 'white', 1], 
	['LEVEL', 'LEVEL', 'black', 1], 
	['RACECAR', 'RACECAR', 'black', 1], 
	['SOLOS', 'SOLOS', 'black', 1], 
	['MASSACRED', 'SACRED', 'red', 1], 
	['DECAY', 'DAY', 'red', 1], 
	['DREAD', 'DEAD', 'red', 1], 
	['SLAUGHTER', 'LAUGHTER', 'red', 1], 
	['THE TENACIOUS', 'THE TENACIOUS', 'white', 1]
];
var theArtisticPanda = 
	[['EYE', 'IRIS', 'blue', 0], 
	 ['EYE', 'IRIS', 'red', 2],
	 ["LADYLIKE", "LAKE", 'red', 1], 
	 ["WATER", "LAKE", 'blue', 2], 
	 ["OURS", "HOURS", 'blue', 1], 
	 ["DAYS", "HOURS", 'red', 2], 
	 ["NIGHTTIME", "KNIGHT", 'red', 0], 
	 ["NIGHT", "KNIGHT", 'blue', 1]
	];
var theBold = [
	["SON \\\\ RISE", "SUNRISE", 'blue', 0], 
	["RISE \\\\ ZEN", "HORIZON", 'blue', 0], 
	["STARGAZER", "STARGAZER", 'white', 1], 
	["YEAST", "EAST", 'red', 1],
	["SOUND", "SOUTH", 'purple', 1],
	["WET", "WEST", 'blue', 1], 
	["THE EMBOLDENED", "THE BOLD", 'red', 1], 
	["TOE", "FOOT", 'red', 2], 
	["NEEDLE \\\\ FACE", "EYE", 'red', 2], 
	["SIGN", "SIGH", 'red', 0],
	["HEARTBREAK", "BRAKE", 'red', 0], 
	["UNDEAD \\\\ DEADLINE", "DEAD", 'red', 1],
	["SUSHI", "HI", 'red', 1], 
	["THISTLE", "THIS", 'red', 1], 
	["LANDMASS \\\\ MASSACRED", "MASS", 'red', 1],
	["AIRPLANE", "PLAIN", 'red', 0],
	["NIGHTMARE", "KNIGHT", 'red', 0], 
	["MOUTH \\\\ SAW", "TEETH", 'red', 2], 
	["HAND", "FINGER", 'red', 2]
];
var theSteady = [
	["BEGIN", "BEGIN", 'white', 1],
	["SOAR", "ROSE", 'black', 0], 
	["BURY", "RUBY", 'yellow', 1], 
	["LIE LACK", "LILAC", 'white', 0],
	["PACIFIST", "AMETHYST", 'purple', 1],
	["INCARNATION", "CARNATION", 'red', 1],
	["SUN", "SUNFLOWER", 'blue', 1],
	["LIMELIGHT", "LIME", 'red', 1], 
	["SAP", "SAPPHIRE", 'blue', 1], 
	["LUMP", "PLUM", 'yellow', 1], 
	["HAIRY", "CHERRY", 'blue', 0], 
	["ANTECHAMBER", "AMBER", 'red', 1],
	["BLUE", "BLUEBERRY", 'blue', 1],
	["BLUE", "ORANGE", 'black', 2], 
	["HERALD", "EMERALD", 'purple', 1],
	["MELON", "LEMON", 'yellow', 1], 
	["TOP", "TOPAZ", 'blue', 0],
	["THE STEADY", "THE STEADY", 'white', 1]
];
var theColorful = [
	["BEGIN", "START", 'white', 2],
	["FOUND", "LOST", 'black', 2], 
	["LOAF", "CRUST", 'red', 2], 
	["CREAM", "BUTTER", 'yellow', 2],
	["SUN", "SKY", 'blue', 2], 
	["SPOON", "FORK", 'purple', 2], 
	["LETTERS", "NUMBERS", 'orange', 2], 
	["BACKGROUND", "GRAY", 'green', 2],
	["IRON", "RUST", brown, 2],
	["OBSTACLE", "PUZZLE", 'gray', 2], 
	["THE COLORFUL", "THE COLORFUL", 'white', 1]
];
var theUndeterred = [
	["BONE", "SKELETON", 'blue', 2],
	["EYE \\\\ MOUTH", "FACE", 'blue', 2],
	["IRIS", "EYE", 'blue', 2],
	["EYE", "HEIGHT", 'blue', 0],
	["ICE \\\\ HEIGHT", "EYESIGHT", 'blue', 0],
	["EYE", "HI", 'blue', 0], 
	["NOT", "KNOT", 'blue', 1],
	["JUST \\\\ READ", "READJUST", 'blue', 1], 
	["FATHER", "FEATHER", 'blue', 1], 
	["CONTINENT \\\\ OCEAN", "PLANET", 'blue', 2], 
	["WALL", "ROOM", 'blue', 2]
];
var theWise = [
	["KITTEN", "CAT", brown, 2],
	["CAT", "KITTEN", "blackBrown", 2], 
	["THOU", "YOU", brown, 1],
	["CONNEXION", "CONNECTION", brown, 1],
	["NIGH", "NEAR", brown, 1],
	["BETWIXT", "BETWEEN", brown, 1],
	["YOUR", "THY", 'blackBrown', 1],
	["BEFORE", "ERE", 'blackBrown', 1],
	["CORPSE", "SKELETON", brown, 2], 
	["OAK", "ACORN", 'blackBrown', 2],
	["DINOSAUR", "FOSSIL", brown, 2],
	["BREAD", "MOLD", brown, 2], 
	["ADULT", "CHILD", 'blackBrown', 2],
	["PUPPY", "DOG", brown, 2], 
	["THE INTELLIGENT", "THE WISE", brown, 1]
];
var crossroads = [
	["CROSSROADS", "CROSSROADS", 'white', 1],
	["EIGHT", "EIGHT", 'white', 1],
	["BEND HI", "BEHIND", 'yellow', 1], 
	["WE ROT", "TOWER", 'yellow', 1],
	["HOT CRUSTS", "SHORTCUTS", 'yellow', 1],
	["LEARNS + UNSEW", "UNREST", 'orange', 1],
	["IRK HORN", "CORNER", 'yellow', 0], 
	["RUNT", "TURN", 'yellow', 1], 
	["RUNT", "RETURN", 'yellow-blue', 1],
	["GEL", "LEDGE", 'yellow', 0], 
	["THOUGH", "OATH", 'yellow', 0],
	["SWORD", "WORDS", 'yellow', 1], 
	["SWAP", "WASP", 'yellow', 1], 
	["LOST", "FOUND", 'black', 2], 
	["ORDER", "CHAOS", 'black', 2], 
	["CORNER", "CORNER", 'white', 1], 
	["HOLLOW", "HOLLOW", 'white', 1],
	["THE EYES", "THEY SEE", 'yellow', 1],
	["NAME \\\\ AMEN", "MEAN", 'yellow', 1],
	["NINE", "NINE", 'white', 1],
	["LOST \\\\ SLOT", "LOTS", 'yellow', 1]
];
			
// Any Custom Level:

var returner = [["LEVEL 1", 26, 'white', 1]];

// Level 2:

var startingTwoom = [
	["I", "I", 'white', 1],
	["REMEMBER", "REMEMBER", 'white', 1], 
	["YOU", "YOU", 'white', 1], 
	["REMEMBER", "REMEMBER", 'white', 1],
	["HELLO AGAIN", "HI", mint, 1]
];
var theFuzzy = [
	["KIWI", "FRUIT", lime, 2],
	["HEXAGON \\\\ STAR", "SHAPE", lime, 2],
	["SPEAR \\\\ PEPPER", "MINT", lime, 2],
	["BLOOD \\\\ NAVEL", "ORANGE", lime, 2],
	["SURPRISE \\\\ DISGUST", "EMOTION", lime, 2],
	["LOCK", "KEY", 'black', 2], 
	["THEY", "WE", 'black', 2],
	["FIRST", "KIWI", mint, 1],
	["SCULPTURE \\\\ CINEMA", "ART", lime, 2],
	["CHOCOLATE \\\\ BRUNETTE", "BROWN", lime, 2],
	["MAUVE \\\\ LAVENDER", "PURPLE", lime, 2], 
	["WRENCH \\\\ SCREWDRIVER", "TOOL", lime, 2],
	["THE FUNNY", "THE FUZZY", 'purple', 1]
];
var theExemplary = [
	["COW", "MOO", magenta, 0],
	["SEAL \\\\ DOG", "BARK", magenta, 0], 
	["BEE", "BUZZ", magenta, 0],
	["KOREAN", "AANYEONG", magenta, 0],
	["DUTCH \\\\ GERMAN", "HALLO", magenta, 0],
	["ENGLISH", "HI", magenta, 0],
	["FRENCH", "SALUT", magenta, 0],
	["NORWEGIAN \\\\ FINNISH", "HEI", magenta, 0],
	["SPANISH", "HOLA", magenta, 0],
	["SNAKE", "HISS", magenta, 0], 
	["SHEEP \\\\ GOAT", "BLEAT", magenta, 0], 
	["TURKEY", "GOBBLE", magenta, 0],
	["THE EXEMPLARY", "THE EXEMPLARY", 'white', 1]
];
var theFresh = [
	["WHITE", "HI", mint, 1],
	["BLACK", "LEVEL", mint, 1],
	["RED", "SACRED", mint, 1],
	["ORANGE", "NUMBERS", mint, 1],
	["YELLOW", "RUBY", mint, 1], 
	["GREEN", "GRAY", mint, 1],
	["BLUE", "IRIS", mint, 1],
	["PURPLE", "SOUTH", mint, 1], 
	["BROWN", "CAT", mint, 1],
	["LIME", "FRUIT", mint, 1],
	["MAGENTA", "MOO", mint, 1],
	["MINT", "HI", mint, 1], 
	["THE FRESH", "THE FRESH", 'white', 1]
];
var theUnscrambled = [
	["ENOUGH ALREADY", "HI", 'purple', 1],
	["VALOR DEN", "LAVENDER", 'yellow', 0], 
	["DOOR", "KEYHOLE", lavender, 2],
	["CANDY \\\\ CHIPS", "WRAPPER", lavender, 2],
	["HAND", "GLOVE", lavender, 2],
	["HAND", "MITTEN", lavender, 2],
	["ORANGE \\\\ BANANA", "PEEL", lavender, 2],
	["EARTH", "SPACE", lavender, 2],
	["EARTH", "SKY", lavender, 2],
	["EARTH", "ATMOSPHERE", lavender, 2], 
	["DAYDREAM", "NIGHTMARE", "black", 2], 
	["ATTHENS CRUMBLED", "THE UNSCRAMBLED", 'yellow', 1]
];

// Duolingo puzzles: 

var theRedundant = [
	["HI", "HI", 'white', 1], 
	["HI", "HIGH", 'white', 0], 
	["COUP \\\\ PLED", "COUPLED", 'blue', 1],
	["SINGLE \\\\ HALVED", "DOUBLED", 'black', 2],
	["YELLOW", "LOW", 'red', 1],
	["HELLO", "LOW", 'red', 2], 
	["HI \\\\ HER", "HIGHER", 'blue', 1], 
	["ORDINARY", "BINARY", 'purple', 1],
	["BRAINY", "BINARY", 'yellow', 1],
	["DUALITY \\\\ INDIVIDUALITY", "DUAL", 'red', 1],
	["THE \\\\ REDUNDANT", "THE REDUNDANT", 'blue', 1]
];
var theNaive = [
	["IN", "IN", 'white', 1], 
	["IT", "IT", 'white', 1],
	["I", "I", 'white', 1], 
	["ATE", "ATE", 'white', 1],
	["START", "INITIATE", 'white-cream', 2], 
	["HE", "HE", 'white', 1],
	["HEART", "HEART", 'white-cream', 1],
	["ART", "ART", 'white', 1],
	["TRIP", "TRIP", 'white', 1], 
	["LET", "LET", 'white', 1],
	["TRIPLET", "TRIPLET", 'white-cream', 1],
	["FIN", "FIN", 'white', 1], 
	["ALE", "ALE", 'white', 1],
	["END", "FINALE", 'white-cream', 2], 
	["A", "A", 'white', 1],
	["BET", "BET", 'white', 1], 
	["BEAT", "ABET", 'yellow-cream', 1],
	["DISAGREE", "AGREE", 'black', 2],
	["A", "AGREEABLE", 'blue-cream', 1],
	["UNABLE", "ABLE", 'black', 2]
];

// Setup BS

const audio = new Audio('https://dl.sndup.net/kvsx/lingo_w.mp3');

var l1puzzles = startingRoom.concat(heightTutorial, theTenacious, theArtisticPanda, theBold, theSteady, theColorful, theWise, crossroads);
var l2puzzles = returner.concat(startingTwoom, theFuzzy, theExemplary, theFresh, theUnscrambled);
var l10001puzzles = returner.concat(theRedundant, theNaive);

var puzzles = l1puzzles;
var levelNo = 1;

var colors = ['white', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'rgb(128, 56, 51)', 'blackBrown', 'yellow-blue', 'rgb(8,252,164)', 'rgb(0,255,0)', 'rgb(0,255,0)'];
var colorMeanings = ['SAME', 'OPPOSITE', 'REMOVE', 'WANDERLUST CIPHER', 'SCRAMBLE', 'ENVIRONMENT', 'ADD', 'REPLACE', 'META', 'TIME', 'REWIND', 'SCRAMBLE ► ADD', 'MEMORY', 'EXAMPLE OF', 'CATEGORY CONTAINS'];

var randomElement = 1;
var shufflePuzzles = 0;
var completeInOrder = 1;

var completedPuzzles = loadCompletedPuzzles();

if (shufflePuzzles == 1) {shuffle(puzzles);}

if (completeInOrder == 1) {randomElement = 0;}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}    
document.addEventListener("DOMContentLoaded", function() {
    console.log(completedPuzzles);
    while (completedPuzzles.includes(randomElement+1)) {
        randomElement++;
    }
    setupGame();
});
function validate() { 
    var x = document.getElementById("answer-field").value; 
    if (puzzles[randomElement][1] == 25) {
        if (x == "LEVEL 2") {
            puzzles = l2puzzles;
            levelNo = 2;      
            randomElement = 0;
            completedPuzzles = loadCompletedPuzzles();
            setupGame();
        }
        if (x == "DUOLINGO") {
            puzzles = l10001puzzles;
            levelNo = 10001;      
            randomElement = 0;
            completedPuzzles = loadCompletedPuzzles();
            setupGame();
        }
        if (x == "DELETE SAVE") {
            clearCompletedPuzzles();
            puzzles = l1puzzles;
            levelNo = 1;      
            randomElement = 0;
            completedPuzzles = loadCompletedPuzzles();
            setupGame();
        }
    }
    if (puzzles[randomElement][1] == 26) {
        if (x == "LEVEL 1") {
            puzzles = l1puzzles;
            levelNo = 1;      
            randomElement = 0;
            completedPuzzles = loadCompletedPuzzles();
            setupGame();
        }
    }
    if (x == puzzles[randomElement][1]) {
        document.getElementById("clue").style.color = "rgb(0, 255, 0)";
        audio.play();
        var puzzleID = puzzles.indexOf(puzzles[randomElement]);
        markPuzzleCompleted(puzzleID);
        sleep(900).then(() => {setupGame();});
    };
}; 
function setupGame() {
    var creamFlag = 0;
    if (completeInOrder == 0) {
        oldRand = randomElement;
        randomElement = Math.floor(Math.random() * puzzles.length);
        if (oldRand == randomElement) {randomElement++; if (randomElement == puzzles.length) {randomElement = 0;}}
    } else {
        randomElement++;
        if (randomElement == puzzles.length) {randomElement = 0;}
    }

    document.getElementById("clue").style.color = "white";
    if (completedPuzzles.includes(randomElement)) {document.getElementById("clue").style.color = "rgb(0, 255, 0)";}
    document.getElementById("colorHint").innerHTML = "";

    document.getElementById("clue").innerHTML = puzzles[randomElement][0];

    if (puzzles[randomElement][2].includes("-cream")) {
        color = puzzles[randomElement][2].replace('-cream', '');
        creamFlag = 1;
    } else {
        color = puzzles[randomElement][2]
    }

    if (color == "blackBrown") {
        document.getElementById("box").style.borderColor = brown;
        document.getElementById("box").style.borderTopColor = "black";
        document.getElementById("box").style.borderLeftColor = "black";
    } else if (color == "yellow-blue") { 
		document.getElementById("box").style.borderColor = "yellow";
        document.getElementById("box").style.borderLeftColor = "blue";
        document.getElementById("box").style.borderRightColor = "blue";
	} else {
        document.getElementById("box").style.borderColor = color;
    }

    if (creamFlag == 1) {
        document.getElementById("box").style.borderLeftColor = cream;
        document.getElementById("box").style.borderRightColor = cream;
    }
            
    document.getElementById("answer-field").value = "";
    if (completedPuzzles.includes(randomElement)) {document.getElementById("answer-field").value = puzzles[randomElement][1];}
    help = 0;
    var placeholderTxt = "";
    if (puzzles[randomElement][1] != 24) {
        for (i = 0; i < puzzles[randomElement][1].length; i++) {
            placeholderTxt = placeholderTxt + "_ ";
        }
    }   
    document.getElementById("answer-field").placeholder = placeholderTxt; 
    switch(puzzles[randomElement][3]) {
        case 0: 
            document.getElementById("height").innerHTML = "^";
            break;
        case 1:
            document.getElementById("height").innerHTML = "-";
            break;
        default:    
            document.getElementById("height").innerHTML = "v";
            break;
    } 
}

function moveLeft() {
    if (randomElement != 0) {randomElement--; randomElement--; setupGame();}
}

function moveRight() {
    if (randomElement != puzzles.length - 1) {setupGame();}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

function getHelp() {
    help++;
    switch (help) {
        case 1: 
            placeholderText = puzzles[randomElement][1].charAt(0);
            placeholderText = placeholderText + ' ';
            for (i = 1; i < puzzles[randomElement][1].length; i++) {
                placeholderText = placeholderText + "_ ";
            }
            document.getElementById("answer-field").placeholder = placeholderText; 
            break;
    }
}

// Function to save completed puzzles to localStorage
function saveCompletedPuzzles(completedPuzzles) {
    localStorage.setItem('completedPuzzles' + levelNo, JSON.stringify(completedPuzzles));
}

// Function to load completed puzzles from localStorage
function loadCompletedPuzzles() {
    const completedPuzzlesJSON = localStorage.getItem('completedPuzzles' + levelNo);
    return completedPuzzlesJSON ? JSON.parse(completedPuzzlesJSON) : [];
}

// Mark a puzzle as completed
function markPuzzleCompleted(puzzleId) {
    if (!completedPuzzles.includes(puzzleId)) {
        completedPuzzles.push(puzzleId);
        saveCompletedPuzzles(completedPuzzles);
    }
}

function clearCompletedPuzzles() {
    localStorage.setItem('completedPuzzles1', []);
    localStorage.setItem('completedPuzzles2', []);
    localStorage.setItem('completedPuzzles10001', []);
}

