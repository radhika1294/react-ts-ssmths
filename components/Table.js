import '../components/Table.css';
function Table(props) {
  const records = props.records;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Trainer</th>
            <th>Topic</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {/* records.forEach((record, index) => {
            return (
              <tr id={index}>
                <td>{record.name}</td>
                <td>{record.topic}</td>
                <td>{record.day}</td>
              </tr>
            );
          })  */}
          <tr>
            <td>{records[0].name}</td>
            <td>{records[0].topic}</td>
            <td>{records[0].day}</td>
          </tr>
          <tr>
            <td>{records[1].name}</td>
            <td>{records[1].topic}</td>
            <td>{records[1].day}</td>
          </tr>
          <tr>
            <td>{records[2].name}</td>
            <td>{records[2].topic}</td>
            <td>{records[2].day}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
