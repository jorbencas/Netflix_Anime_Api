// script express rename file and convert to mp4 folder episodes recursibly

var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;

// function to do script
function doScript(script) {
  console.log(script);
  exec(script, function (error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
}

function copyFilesRecursiblyAndChangeExtension(src, dest, newExtension) {
  var files = fs.readdirSync(src);
  for (var i in files) {
    var name = files[i];
    var srcPath = path.join(src, name);
    var destPath = path.join(dest, name);
    var stat = fs.statSync(srcPath);
    if (stat.isFile()) {
      var newName = name.replace(/\.\w+$/, newExtension);
      var newDestPath = path.join(dest, newName);
      fs.renameSync(srcPath, newDestPath);
    } else if (stat.isDirectory()) {
      copyFilesRecursiblyAndChangeExtension(srcPath, destPath, newExtension);
    }
  }
}

function ffmpegtomp4Recursively(src, dest) {
  var files = fs.readdirSync(src);
  for (var i in files) {
    var name = files[i];
    var srcPath = path.join(src, name);
    var destPath = path.join(dest, name);
    var stat = fs.statSync(srcPath);
    if (stat.isFile()) {
      var newName = name.replace(/\.\w+$/, ".mp4");
      var newDestPath = path.join(dest, newName);
      doScript(
        "ffmpeg -i " + srcPath + " -c:v libx264 -c:a copy " + newDestPath
      );
    } else if (stat.isDirectory()) {
      ffmpegtomp4Recursively(srcPath, destPath);
    }
  }
}

function downloadEpisodesAnime(animeId, episodeNumber) {
  var animeName = getAnimeName(animeId);
  var animeFolder = path.join(__dirname, "animes", animeName);
  var episodeFolder = path.join(animeFolder, "episodes", episodeNumber);
  var episodeFile = path.join(episodeFolder, "episode.mp4");
  if (!fs.existsSync(episodeFolder)) {
    fs.mkdirSync(episodeFolder);
  }
  if (!fs.existsSync(episodeFile)) {
    doScript(
      "wget -O " +
        episodeFile +
        " https://www.animeflv.net/ver/" +
        animeId +
        "/" +
        episodeNumber
    );
  }
}

function downloadPlutoTVAnime(animeId, episodeNumber) {
  var animeName = getAnimeName(animeId);
  var animeFolder = path.join(__dirname, "animes", animeName);
  var episodeFolder = path.join(animeFolder, "episodes", episodeNumber);
  var episodeFile = path.join(episodeFolder, "episode.mp4");
  if (!fs.existsSync(episodeFolder)) {
    fs.mkdirSync(episodeFolder);
  }
  if (!fs.existsSync(episodeFile)) {
    doScript(
      "wget -O " +
        episodeFile +
        " https://www.plutotv.net/ver/" +
        animeId +
        "/" +
        episodeNumber
    );
  }
}

function generateStructureOfAnime(animeId) {
  var animeName = getAnimeName(animeId);
  var animeFolder = path.join(__dirname, "animes", animeName);
  var episodesFolder = path.join(animeFolder, "episodes");
  var episodeFile = path.join(episodesFolder, "episode.mp4");
  if (!fs.existsSync(animeFolder)) {
    fs.mkdirSync(animeFolder);
  }
  if (!fs.existsSync(episodesFolder)) {
    fs.mkdirSync(episodesFolder);
  }
}

function getAnimeName(animeId) {
  var animeName = "";
  var animeFile = path.join(__dirname, "animes", "animes.json");
  var animeJson = JSON.parse(fs.readFileSync(animeFile));
  for (var i in animeJson) {
    if (animeJson[i].id == animeId) {
      animeName = animeJson[i].name;
      break;
    }
  }
  return animeName;
}

function downloadAnimeClasicoPlutoTV(animeId) {
  var animeName = getAnimeName(animeId);
  var animeFolder = path.join(__dirname, "animes", animeName);
  var episodesFolder = path.join(animeFolder, "episodes");
  var episodeFile = path.join(episodesFolder, "episode.mp4");
  if (!fs.existsSync(animeFolder)) {
    fs.mkdirSync(animeFolder);
  }
  if (!fs.existsSync(episodesFolder)) {
    fs.mkdirSync(episodesFolder);
  }
  if (!fs.existsSync(episodeFile)) {
    doScript(
      "wget -O " + episodeFile + " https://www.plutotv.net/ver/" + animeId
    );
  }
}

function getVideosAnimeEpisodesComplitesByYoutubeDl() {
  var animeFile = path.join(__dirname, "animes", "animes.json");
  var animeJson = JSON.parse(fs.readFileSync(animeFile));
  for (var i in animeJson) {
    var animeId = animeJson[i].id;
    var animeName = animeJson[i].name;
    var animeFolder = path.join(__dirname, "animes", animeName);
    var episodesFolder = path.join(animeFolder, "episodes");
    var episodeFile = path.join(episodesFolder, "episode.mp4");
    if (fs.existsSync(episodeFile)) {
      doScript(
        "youtube-dl -f best -o " +
          episodeFile +
          " https://www.youtube.com/watch?v=" +
          animeId
      );
    }
  }
}

function getVideosAnimeEpisodesComplitesByYoutubeDlPlutoTV(animeId) {
  var animeName = getAnimeName(animeId);
  var animeFolder = path.join(__dirname, "animes", animeName);
  var episodesFolder = path.join(animeFolder, "episodes");
  var episodeFile = path.join(episodesFolder, "episode.mp4");
  if (fs.existsSync(episodeFile)) {
    doScript(
      "youtube-dl -f best -o " +
        episodeFile +
        " https://www.youtube.com/watch?v=" +
        animeId
    );
  }
}

function downloadCartoonsAnimatedSeriesFrance() {
  var cartoonsFile = path.join(__dirname, "cartoons", "cartoons.json");
  var cartoonsJson = JSON.parse(fs.readFileSync(cartoonsFile));
  for (var i in cartoonsJson) {
    var cartoonId = cartoonsJson[i].id;
    var cartoonName = cartoonsJson[i].name;
    var cartoonFolder = path.join(__dirname, "cartoons", cartoonName);
    var episodesFolder = path.join(cartoonFolder, "episodes");
    var episodeFile = path.join(episodesFolder, "episode.mp4");
    if (!fs.existsSync(cartoonFolder)) {
      fs.mkdirSync(cartoonFolder);
    }
    if (!fs.existsSync(episodesFolder)) {
      fs.mkdirSync(episodesFolder);
    }
    if (!fs.existsSync(episodeFile)) {
      doScript(
        "wget -O " +
          episodeFile +
          " https://www.youtube.com/watch?v=" +
          cartoonId
      );
    }
  }
}

// scrapping random webs to download anime in spanish

function downloadAnimeRandomSpanish() {
  var animeFile = path.join(__dirname, "animes", "animes.json");
  var animeJson = JSON.parse(fs.readFileSync(animeFile));
  for (var i in animeJson) {
    var animeId = animeJson[i].id;
    var animeName = animeJson[i].name;
    var animeFolder = path.join(__dirname, "animes", animeName);
    var episodesFolder = path.join(animeFolder, "episodes");
    var episodeFile = path.join(episodesFolder, "episode.mp4");
    if (!fs.existsSync(animeFolder)) {
      fs.mkdirSync(animeFolder);
    }
    if (!fs.existsSync(episodesFolder)) {
      fs.mkdirSync(episodesFolder);
    }
    if (!fs.existsSync(episodeFile)) {
      doScript(
        "wget -O " + episodeFile + " https://www.youtube.com/watch?v=" + animeId
      );
    }
  }
}

function downloadAnimeRandom() {}
