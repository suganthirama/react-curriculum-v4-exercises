//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

import SnackHeader from './SnackHeader.jsx';
import SnackFooter from './SnackFooter.jsx';
import SnackList from './SnackList.jsx';

export default function StudentWork() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter></SnackFooter>
    </div>
  );
}
