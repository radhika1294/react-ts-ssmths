import Table from './Table';
function Dashboard() {
  let trainersDetails = [
    { name: 'Unni', topic: 'React Architecture', day: 'Day1' },
    { name: 'Rahul', topic: 'React Hooks', day: 'Day2' },
    { name: 'Pavithra', topic: 'Context API', day: 'Day3' },
  ];
  return (
    <div>
      <h3>React Trainers</h3>
      <Table records={trainersDetails}></Table>
    </div>
  );
}
export default Dashboard;
