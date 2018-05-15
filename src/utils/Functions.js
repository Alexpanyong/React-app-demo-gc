export const sortEntryByYear = (entriesArray) => entriesArray ? entriesArray.filter(entry => entry.releaseYear >= 2010) : [];

export const getFirstTwentyOneEntries = (entriesArray) => entriesArray ? entriesArray.slice(0, 21) : [];

export const ascendingSortedEntries = (entriesArray) => {
  return entriesArray ? entriesArray.sort(function (a, b) {
    return a.title.substring(0, 1).toLowerCase().charCodeAt(0) - b.title.substring(0, 1).toLowerCase().charCodeAt(0);
  }) : [];
}