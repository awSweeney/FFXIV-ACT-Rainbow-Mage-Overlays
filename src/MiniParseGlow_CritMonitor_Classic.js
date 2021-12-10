
var encounterDefine = "Time:<span class='enc'>{duration}</span> &nbsp;&nbsp;&nbsp;Total DPS:<span class='enc'>{dps}</span> &nbsp;&nbsp;&nbsp;Best Hit:<span class='enc'>{maxhit}</span>";

var useHTMLEncounterDefine = true;

var headerDefine =
    [
        { text: "Job", width: "2em", align: "center" },
        { text: "Name", width: "9em", align: "center" },
        { text: "DPS", width: "4em", align: "center" },
        { text: "DMG", width: "2em", align: "center" },
        { text: "Crit", width: "2.5em", align: "center" },
        { text: "DHit", width: "2.5em", align: "center" },
        { text: "DCHit", width: "2.5em", align: "center" },
        { text: "Death", width: "2.5em", align: "center" }
    ];

var bodyDefine =
    [
        { html: "<img src='../images/glow/{JobOrName}.png' style='width=60%;height:60%;' onerror='this.src=\"../images/glow/error.png\";' />", align: "center", effect: dpsBarEffect },
        { text: "{name}", width: "", align: "center", effect: myCharacterEffect },
        { text: "{encdps}", width: "", align: "center" },
        { text: "{damage%}", width: "", align: "center" },
        { text: "{crithit%}", width: "", align: "center" },
        { text: "{DirectHitPct}", width: "", align: "center" },
        { text: "{CritDirectHitPct}", width: "", align: "center" },
        { text: "{deaths}", width: "", align: "center", effect: redTextEffect }
    ];

function myCharacterEffect(cell, combatant, index) {
    var myname = "YOU";
    if (myname == combatant["name"]) {
        $(cell).parents("tr").addClass("mc");
    }
}

function insertCommaEffect(cell) {
    cell.innerText = cell.innerText.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

function redTextEffect(cell) {
    var num = parseInt(cell.innerText)
    if (num > 0) {
        $(cell).addClass("textred");
    }
}

function graphEffect(cell) {
    $(cell).addClass("graphCell");
}

function dpsBarEffect(cell, combatant, index) {
    var tank = jsonConfig.roles.tank;
    var dps = jsonConfig.roles.dps;
    var healer = jsonConfig.roles.healer;

    if (index == 0 || typeof dpsBarEffect.topdeeps == 'undefined') {
        dpsBarEffect.topdeeps = combatant["encdps"];
    }
    var deeps = combatant["encdps"];


    var job = combatant["Job"];
    if (dps.indexOf(job) > -1) {
        var color = "rgba(200,3,8,0.3)";
    } else if (tank.indexOf(job) > -1) {
        var color = "rgba(41,112,243,0.3)";
    } else if (healer.indexOf(job) > -1) {
        var color = "rgba(107,240,86,0.3)";
    } else {
        var color = "rgba(128,0,255,0.3)";
    }

    var tableRow = cell.parentNode;
    tableRow.style.background = "-webkit-gradient(linear, left top,right top, color-stop(0.95," + color + "), to(rgba(24,24,24,0.0)))";
    tableRow.style.backgroundSize = (parseInt(deeps) * 100 / parseInt(dpsBarEffect.topdeeps)) + "% 100%";
    tableRow.style.backgroundAttachment = "fixed";
    tableRow.style.backgroundRepeat = "no-repeat";
}

function graphRendering(table) {
    $("tr:eq(0) > td.graphCell", table).each(function () {
        var max = 0;
        $("tr > td:nth-child(" + ($("tr:eq(0) td", table).index($(this)) + 1) + ")", table).each(function () {
            max = (max < parseInt($(this).text().replace(/[^\d]/g, ""))) ? parseInt($(this).text().replace(/[^\d]/g, "")) : max;
        });
        $("tr > td:nth-child(" + ($("tr:eq(0) td", table).index($(this)) + 1) + ")", table).each(function () {
            p = (max == 0) ? "0%" : (parseInt($(this).text().replace(/[^\d]/g, "")) / max * 100) + "%";
            $(this).css("background-size", p + " 100%, 100% 100%");
        });
    });
}

document.addEventListener("onOverlayDataUpdate", function (e) {
    update(e.detail);
});

function update(data) {
    updateEncounter(data);
    if (document.getElementById("combatantTableHeader") == null) {
        updateCombatantListHeader();
    }
    updateCombatantList(data);
}

function updateEncounter(data) {

    var encounterElem = document.getElementById('encounter');


    var elementText;
    if (typeof encounterDefine === 'function') {
        elementText = encounterDefine(data.Encounter);
        if (typeof elementText !== 'string') {
            console.log("updateEncounter: 'encounterDefine' is declared as function but not returns a value as string.");
            return;
        }
    } else if (typeof encounterDefine === 'string') {
        elementText = parseActFormat(encounterDefine, data.Encounter);
    } else {
        console.log("updateEncounter: Could not update the encounter element due to invalid type.");
        return;
    }


    if (!useHTMLEncounterDefine) {
        encounterElem.innerText = parseActFormat(encounterDefine, data.Encounter);
    } else {
        encounterElem.innerHTML = parseActFormat(encounterDefine, data.Encounter);
    }
}

function updateCombatantListHeader() {
    var table = document.getElementById('combatantTable');
    var tableHeader = document.createElement("thead");
    tableHeader.id = "combatantTableHeader";
    var headerRow = tableHeader.insertRow();

    for (var i = 0; i < headerDefine.length; i++) {
        var cell = document.createElement("th");

        if (typeof headerDefine[i].text !== 'undefined') {
            cell.innerText = headerDefine[i].text;
        } else if (typeof headerDefine[i].html !== 'undefined') {
            cell.innerHTML = headerDefine[i].html;
        }

        cell.style.width = headerDefine[i].width;
        cell.style.maxWidth = headerDefine[i].width;

        if (typeof headerDefine[i].span !== 'undefined') {
            cell.colSpan = headerDefine[i].span;
        }

        if (typeof headerDefine[i].align !== 'undefined') {
            cell.style["textAlign"] = headerDefine[i].align;
        }
        headerRow.appendChild(cell);
    }

    table.tHead = tableHeader;
}


function updateCombatantList(data) {

    var table = document.getElementById('combatantTable');
    var oldTableBody = table.tBodies.namedItem('combatantTableBody');
    var newTableBody = document.createElement("tbody");
    newTableBody.id = "combatantTableBody";


    var combatantIndex = 0;
    for (var combatantName in data.Combatant) {
        var combatant = data.Combatant[combatantName];
        combatant.JobOrName = combatant.Job || combatantName;
        var egiSearch = combatant.JobOrName.indexOf("-Egi (");
        if (egiSearch != -1) {
            combatant.JobOrName = combatant.JobOrName.substring(0, egiSearch);
        }
        else if (combatant.JobOrName.indexOf("Eos (") == 0) {
            combatant.JobOrName = "Eos";
        }
        else if (combatant.JobOrName.indexOf("Selene (") == 0) {
            combatant.JobOrName = "Selene";
        }
        else if (combatant.JobOrName.indexOf("Carbuncle (") != -1) {

        }
        else if (combatant.JobOrName.indexOf(" (") != -1) {
            combatant.JobOrName = "choco";
        }

        var tableRow = newTableBody.insertRow(newTableBody.rows.length);
        for (var i = 0; i < bodyDefine.length; i++) {
            var cell = tableRow.insertCell(i);

            if (typeof bodyDefine[i].text !== 'undefined') {
                var cellText;
                if (typeof bodyDefine[i].text === 'function') {
                    cellText = bodyDefine[i].text(combatant, combatantIndex);
                } else {
                    cellText = parseActFormat(bodyDefine[i].text, combatant);
                }
                cell.innerText = cellText;
            } else if (typeof bodyDefine[i].html !== 'undefined') {
                var cellHTML;
                if (typeof bodyDefine[i].html === 'function') {
                    cellHTML = bodyDefine[i].html(combatant, combatantIndex);
                } else {
                    cellHTML = parseActFormat(bodyDefine[i].html, combatant);
                }
                cell.innerHTML = cellHTML;
            }

            cell.style.width = bodyDefine[i].width;
            cell.style.maxWidth = bodyDefine[i].width;

            if (typeof (bodyDefine[i].align) !== 'undefined') {
                cell.style.textAlign = bodyDefine[i].align;
            }

            if (typeof bodyDefine[i].effect === 'function') {
                bodyDefine[i].effect(cell, combatant, combatantIndex);
            }
        }
        combatantIndex++;
    }

    graphRendering(newTableBody);


    if (oldTableBody != void (0)) {
        table.replaceChild(newTableBody, oldTableBody);
    }
    else {
        table.appendChild(newTableBody);
    }
}

function parseActFormat(str, dictionary) {
    var result = "";

    var currentIndex = 0;
    do {
        var openBraceIndex = str.indexOf('{', currentIndex);
        if (openBraceIndex < 0) {
            result += str.slice(currentIndex);
            break;
        }
        else {
            result += str.slice(currentIndex, openBraceIndex);
            var closeBraceIndex = str.indexOf('}', openBraceIndex);
            if (closeBraceIndex < 0) {

                console.log("parseActFormat: Parse error: missing close-brace for " + openBraceIndex.toString() + ".");
                return "ERROR";
            }
            else {
                var tag = str.slice(openBraceIndex + 1, closeBraceIndex);
                if (typeof dictionary[tag] !== 'undefined') {
                    result += dictionary[tag];
                } else {
                    console.log("parseActFormat: Unknown tag: " + tag);
                    result += "ERROR";
                }
                currentIndex = closeBraceIndex + 1;
            }
        }
    } while (currentIndex < str.length);

    return result;
}
