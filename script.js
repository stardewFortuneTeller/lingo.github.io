
// External JS? No way.

const brown = "rgb(128, 56, 51)";
var helpLevel = 0;

// Level 1:

var startingRoom = [['HI', 'HI', 'white', 1],['TYPE', 'TYPE', 'white', 1],['THIS', 'THIS', 'white', 1],['WRITE', 'WRITE', 'white', 1],['SAME', 'SAME', 'white', 1]];
var heightTutorial = [['HI', 'HIGH', 'white', 0], ['HI', 'HELLO', 'white', 2]];
var theTenacious = [['LEVEL', 'LEVEL', 'white', 1], ['RACECAR', 'RACECAR', 'white', 1], ['SOLOS', 'SOLOS', 'white', 1], ['LEVEL', 'LEVEL', 'black', 1], ['RACECAR', 'RACECAR', 'black', 1], ['SOLOS', 'SOLOS', 'black', 1], ['MASSACRED', 'SACRED', 'red', 1], ['DECAY', 'DAY', 'red', 1], ['DREAD', 'DEAD', 'red', 1], ['SLAUGHTER', 'LAUGHTER', 'red', 1], ['THE TENACIOUS', 'THE TENACIOUS', 'white', 1]];
var theArtisticPanda = [['EYE', 'IRIS', 'blue', 0], ['EYE', 'IRIS', 'red', 2], ["LADYLIKE", "LAKE", 'red', 1], ["WATER", "LAKE", 'blue', 2], ["OURS", "HOURS", 'blue', 1], ["DAYS", "HOURS", 'red', 2], ["NIGHTTIME", "KNIGHT", 'red', 0], ["NIGHT", "KNIGHT", 'blue', 1]];
var theBold = [["SON \\\\ RISE", "SUNRISE", 'blue', 0], ["RISE \\\\ ZEN", "HORIZON", 'blue', 0], ["STARGAZER", "STARGAZER", 'white', 1], ["YEAST", "EAST", 'red', 1], ["SOUND", "SOUTH", 'purple', 1], ["WET", "WEST", 'blue', 1], ["THE EMBOLDENED", "THE BOLD", 'red', 1], ["TOE", "FOOT", 'red', 2], ["NEEDLE \\\\ FACE", "EYE", 'red', 2], ["SIGN", "SIGH", 'red', 0], ["HEARTBREAK", "BRAKE", 'red', 0], ["UNDEAD \\\\ DEADLINE", "DEAD", 'red', 1], ["SUSHI", "HI", 'red', 1], ["THISTLE", "THIS", 'red', 1], ["LANDMASS \\\\ MASSACRED", "MASS", 'red', 1], ["AIRPLANE", "PLAIN", 'red', 0], ["NIGHTMARE", "KNIGHT", 'red', 0], ["MOUTH \\\\ SAW", "TEETH", 'red', 2], ["HAND", "FINGER", 'red', 2]];
var theSteady = [["BEGIN", "BEGIN", 'white', 1], ["SOAR", "ROSE", 'black', 0], ["BURY", "RUBY", 'yellow', 1], ["LIE LACK", "LILAC", 'white', 0], ["PACIFIST", "AMETHYST", 'purple', 1], ["INCARNATION", "CARNATION", 'red', 1], ["SUN", "SUNFLOWER", 'blue', 1], ["LIMELIGHT", "LIME", 'red', 1], ["SAP", "SAPPHIRE", 'blue', 1], ["LUMP", "PLUM", 'yellow', 1], ["HAIRY", "CHERRY", 'blue', 0], ["ANTECHAMBER", "AMBER", 'red', 1], ["BLUE", "BLUEBERRY", 'blue', 1], ["BLUE", "ORANGE", 'black', 2], ["HERALD", "EMERALD", 'purple', 1], ["MELON", "LEMON", 'yellow', 1], ["TOP", "TOPAZ", 'blue', 0], ["THE STEADY", "THE STEADY", 'white', 1]];
var theColorful = [["BEGIN", "START", 'white', 2], ["FOUND", "LOST", 'black', 2], ["LOAF", "CRUST", 'red', 2], ["CREAM", "BUTTER", 'yellow', 2], ["SUN", "SKY", 'blue', 2], ["SPOON", "FORK", 'purple', 2], ["LETTERS", "NUMBERS", 'orange', 2], ["BACKGROUND", "GRAY", 'green', 2], ["IRON", "RUST", brown, 2], ["OBSTACLE", "PUZZLE", 'gray', 2], ["THE COLORFUL", "THE COLORFUL", 'white', 1]];
var theUndeterred = [["BONE", "SKELETON", 'blue', 2], ["EYE \\\\ MOUTH", "FACE", 'blue', 2], ["IRIS", "EYE", 'blue', 2], ["EYE", "HEIGHT", 'blue', 0], ["ICE \\\\ HEIGHT", "EYESIGHT", 'blue', 0], ["EYE", "HI", 'blue', 0], ["NOT", "KNOT", 'blue', 1], ["JUST \\\\ READ", "READJUST", 'blue', 1], ["FATHER", "FEATHER", 'blue', 1], ["CONTINENT \\\\ OCEAN", "PLANET", 'blue', 2], ["WALL", "ROOM", 'blue', 2]];
var theWise = [["KITTEN", "CAT", brown, 2], ["CAT", "KITTEN", "blackBrown", 2], ["THOU", "YOU", brown, 1], ["CONNEXION", "CONNECTION", brown, 1], ["NIGH", "NEAR", brown, 1], ["BETWIXT", "BETWEEN", brown, 1], ["YOUR", "THY", 'blackBrown', 1], ["BEFORE", "ERE", 'blackBrown', 1], ["CORPSE", "SKELETON", brown, 2], ["OAK", "ACORN", 'blackBrown', 2], ["DINOSAUR", "FOSSIL", brown, 2], ["BREAD", "MOLD", brown, 2], ["ADULT", "CHILD", 'blackBrown', 2], ["PUPPY", "DOG", brown, 2], ["THE INTELLIGENT", "THE WISE", brown, 1]];
var crossroads = [["CROSSROADS", "CROSSROADS", 'white', 1], ["EIGHT", "EIGHT", 'white', 1], ["BEND HI", "BEHIND", 'yellow', 1], ["WE ROT", "TOWER", 'yellow', 1], ["HOT CRUSTS", "SHORTCUTS", 'yellow', 1], ["LEARNS + UNSEW", "UNREST", 'orange', 1], ["IRK HORN", "CORNER", 'yellow', 0], ["RUNT", "TURN", 'yellow', 1], ["RUNT", "RETURN", 'yellow-blue', 1], ["GEL", "LEDGE", 'yellow', 0], ["THOUGH", "OATH", 'yellow', 0], ["SWORD", "WORDS", 'yellow', 1], ["SWAP", "WASP", 'yellow', 1], ["LOST", "FOUND", 'black', 2], ["ORDER", "CHAOS", 'black', 2], ["CORNER", "CORNER", 'white', 1], ["HOLLOW", "HOLLOW", 'white', 1], ["THE EYES", "THEY SEE", 'yellow', 1], ["NAME \\\\ AMEN", "MEAN", 'yellow', 1], ["NINE", "NINE", 'white', 1], ["LOST \\ SLOT", "LOTS", 'yellow', 1]];
			
// Level 2:

// Duolingo puzzles: 

var theRedundant = [["HI", "HI", 'white', 1], ["HI", "HIGH", 'white', 0], ["COUP \\\\ PLED", "COUPLED", 'blue', 1], ["SINGLE \\\\ HALVED", "DOUBLED", 'black', 2], ["YELLOW", "LOW", 'red', 1], ["HELLO", "LOW", 'red', 2], ["HI \\\\ HER", "HIGHER", 'blue', 1], ["ORDINARY", "BINARY", 'purple', 1], ["BRAINY", "BINARY", 'yellow', 1], ["DUALITY \\\\ INDIVIDUALITY", "DUAL", 'red', 1], ["THE \\\\ REDUNDANT", "THE REDUNDANT", 'blue', 1]];

// Setup BS

const audio = new Audio('https://dl.sndup.net/kvsx/lingo_w.mp3');

var puzzles = startingRoom.concat(heightTutorial, theTenacious, theArtisticPanda, theBold, theSteady, theColorful, theWise, theRedundant, crossroads);
// var puzzles = crossroads;

var colors = ['white', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'rgb(128, 56, 51)', 'blackBrown', 'yellow-blue'];
var colorMeanings = ['SAME', 'OPPOSITE', 'REMOVE', 'WANDERLUST CIPHER', 'SCRAMBLE', 'ENVIRONMENT', 'ADD', 'REPLACE', 'META', 'TIME', 'REWIND', 'SCRAMBLE ► ADD'];

var randomElement = 0;
var shufflePuzzles = 0;
var completeInOrder = 1;

if (shufflePuzzles == 1) {shuffle(puzzles);}

if (completeInOrder == 1) {randomElement = -1;}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}    
document.addEventListener("DOMContentLoaded", function() {
    setupGame();
});
function validate() { 
    var x = document.getElementById("answer-field").value; 
    if (x == puzzles[randomElement][1]) {
        document.getElementById("clue").style.color = "rgb(0, 255, 0)";
        audio.play();
        sleep(900).then(() => {setupGame();});
    };
}; 
function setupGame() {
    if (completeInOrder == 0) {
        oldRand = randomElement;
        randomElement = Math.floor(Math.random() * puzzles.length);
        if (oldRand == randomElement) {randomElement++; if (randomElement == puzzles.length) {randomElement = 0;}}
    } else {
        randomElement++;
        if (randomElement == puzzles.length) {randomElement = 0;}
    }

    document.getElementById("clue").style.color = "white";

    document.getElementById("colorHint").innerHTML = "";

    document.getElementById("clue").innerHTML = puzzles[randomElement][0];

    if (puzzles[randomElement][2] == "blackBrown") {
        document.getElementById("box").style.borderColor = brown;
        document.getElementById("box").style.borderTopColor = "black";
        document.getElementById("box").style.borderLeftColor = "black";
    } else if (puzzles[randomElement][2] == "yellow-blue") { 
		document.getElementById("box").style.borderColor = "yellow";
        document.getElementById("box").style.borderBottomColor = "blue";
	} else {
        document.getElementById("box").style.borderColor = puzzles[randomElement][2];
    }
            
    document.getElementById("answer-field").value = "";
    help = 0;
    var placeholderTxt = "";
    for (i = 0; i < puzzles[randomElement][1].length; i++) {
        placeholderTxt = placeholderTxt + "_ ";
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
};

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
        case 2: 
            index = colors.indexOf(puzzles[randomElement][2]);
            document.getElementById("colorHint").innerHTML = colorMeanings[index];
            break;
                default: return;
    }
}