export default function SnackList() {
  const snacks = [
    { name: 'fruit snacks', rank: 5 },
    { name: 'Protein bar', rank: 4 },
    { name: 'crackers', rank: 3 },
    { name: 'Juice', rank: 2 },
    { name: 'Apples', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} (Rank:{snack.rank})
        </li>
      ))}
    </ol>
  );
}
