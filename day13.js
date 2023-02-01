const lastBackup = 1556300600;
const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100],
];

console.log(getFilesToBackup(lastBackup, changes));

function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes
        .filter((x) => x[1] > lastBackup)
        .map((x) => x[0])
        .sort((a, b) => a - b)
    ),
  ];
}

