let v;

let list;

function Graph(vertices) {
  v = vertices;
  list = new Array(v);

  for (let i = 0; i < v; i++) {
    list[i] = [];
  }
}

function addEdge(u, v) {
  list[u].push(v);
}

function allPaths(s, d) {
  let isVisited = new Array(v);
  for (let i = 0; i < v; i++) isVisited[i] = false;
  let pathList = [];

  pathList.push(s);

  allPathsUtil(s, d, isVisited, pathList);
}

function allPathsUtil(u, d, isVisited, localPathList) {
  if (u == d) {
    console.log(localPathList);
    return;
  }

  isVisited[u] = true;

  for (let i = 0; i < list[u].length; i++) {
    if (!isVisited[list[u][i]]) {
      localPathList.push(list[u][i]);
      allPathsUtil(list[u][i], d, isVisited, localPathList);
      localPathList.splice(localPathList.indexOf(list[u][i]), 1);
    }
  }

  isVisited[u] = false;
}

Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 3);

let s = 2;
let d = 3;

allPaths(s, d);
