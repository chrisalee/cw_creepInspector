function predict(room) {
  let rows = room.split("\n");
  let creeperLocations = [];
  let creeper0Locations = [];

  for (let row = 0; row < rows.length; row++) {
    for (let column = 0; column < rows[0].length; column++) {
      if (/^[1-9]$/.test(rows[row][column]))
        creeperLocations.push({ y: row, x: column });
      if (rows[row][column] === "0")
        creeper0Locations.push({ y: row, x: column });
    }
  }
  for (const location of creeperLocations) {
    rows[location.y] = rows[location.y] =
      rows[location.y].slice(0, location.x) +
      (parseInt(rows[location.y][location.x]) - 1) +
      rows[location.y].slice(location.x + 1);
    creeperSpreadUpdate(
      location.y - 1,
      location.x,
      parseInt(rows[location.y][location.x])
    );
    creeperSpreadUpdate(
      location.y + 1,
      location.x,
      parseInt(rows[location.y][location.x])
    );
    creeperSpreadUpdate(
      location.y,
      location.x - 1,
      parseInt(rows[location.y][location.x])
    );
    creeperSpreadUpdate(
      location.y,
      location.x + 1,
      parseInt(rows[location.y][location.x])
    );
  }

  for (const location of creeper0Locations) {
    rows[location.y] =
      rows[location.y].slice(0, location.x) +
      "." +
      rows[location.y].slice(location.x + 1);
  }

  function creeperSpreadUpdate(y, x, numberToAdd) {
    if (typeof rows[y] != "undefined") {
      if (typeof rows[y][x] != "undefined") {
        if (
          /^[0-9.]$/.test(rows[y][x]) &&
          !creeperLocations.some(
            (location) => location.x === x && location.y === y
          ) &&
          !creeper0Locations.some(
            (location) => location.x === x && location.y === y
          )
        ) {
          if (rows[y][x] === ".") {
            rows[y] = rows[y].slice(0, x) + "0" + rows[y].slice(x + 1);
          }
          if (parseInt(rows[y][x]) + numberToAdd > 9) {
            rows[y] = rows[y].slice(0, x) + "9" + rows[y].slice(x + 1);
          } else {
            rows[y] =
              rows[y].slice(0, x) +
              (parseInt(rows[y][x]) + numberToAdd) +
              rows[y].slice(x + 1);
          }
        }
      }
    }
  }
  return rows.join("\n");
}
