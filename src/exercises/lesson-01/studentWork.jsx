//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Suganthi Rmakrishan';
  const age = 40;
  const hobbies = ['Spend time with family', 'Learning new concepts'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        {' '}
        My name is {name}, and I am {age} years old. I completed the Javascript
        course and now I am learning React.{' '}
      </p>

      <ul>
        <h2>Hobbies</h2>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
